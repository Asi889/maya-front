/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import { getUserSession } from '../../src/utils/getUser';
import VendorAPI from '../../src/services/vendor.service';
import { seoMerge } from '../../src/utils/next-seo.config';
import useProfile from '../../src/hooks/useProfile';
import StudyBottomSlider from '../../components/common/StudyBottomSlider';
import StudyProfile from '../../components/common/study/StudyProfile';
import StudyMoreInfo from '../../components/common/study/StudyMoreInfo';

export default function Studies({ study, studies }) {
  const { t } = useTranslation('common');
  useProfile();
  const seo = seoMerge({
    title: t('זירת המקצועות '),
  });
  const router = useRouter();
  if (!study) {
    return 'TODO: redirect to professions page';
  }

  return (
    <div>
      <section>
        <BreadCrumbs
          breadCrumbs={[
            { title: 'לימודים', href: '/studies' },
            { title: study.title, href: router.asPath },
          ]}
        />
        <NextSeo {...seo} />
        <h1 className="text-black text-3xl font-black mb-16">{t('מאגר לימודים')}</h1>
        <div className="md:grid  grid-cols-2 gap-x-4 justify-between">
          <div className="lg:flex felx col-start-1 col-end-3">
            <StudyProfile study={study} />
            <StudyMoreInfo study={study} />
          </div>
          <StudyBottomSlider studies={studies} />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  if (user.redirect) return user;
  const { study } = req.query;
  const [fetchedstudies, fetchedStudy] = await Promise.all([
    VendorAPI.getCategorys(token, 'studies'),
    VendorAPI.getCategory(token, 'study', study),
  ]);
  const studies = fetchedstudies.data;
  const study1 = fetchedStudy.data;
  const locale = `he${user.gender}`;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'study'])),
      user,
      studies,
      study: study1,
    },
  };
}