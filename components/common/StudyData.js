export function StudyData() {
  const studyData = [
    {
      text: 'דרישות מוקדמות',
      id: 1,
      name: 'drishot',
      options: [
        { text: 'השכלה תיכונית חלקית', id: 1, name: 'D_partial_high_school_education' },
        { text: 'השכלה תיכונית מלאה', id: 2, name: 'D_full_high_school_education' },
        { text: 'תעודת גמר/מקצוע', id: 5, name: 'D_graduation_certificate' },
        { text: 'תכנאי/ת', id: 5, name: 'D_technician' },
        { text: 'הנדסאי/ת', id: 5, name: 'D_engineer' },
        { text: 'תואר ראשון', id: 6, name: 'D_ba' },
        { text: 'תואר שני', id: 7, name: 'D_masters_dagree' },
        { text: 'תואר שלישי', id: 7, name: 'D_phd' },
        { text: 'פסיכומטרי', id: 4, name: 'D_psychometric' },
      ],
    },
    {
      text: 'מאפיינים מיוחדים',
      id: 2,
      name: 'miuhad',
      options: [
        { text: 'מתאים גם לאנשים עובדים', id: 1, name: 'S_MsTwv' },
        { text: 'לבני 30 ומעלה', id: 2, name: 'S_Ms35' },
        { text: 'לציבור הדתי והחרדי', id: 3, name: 'S_DATI' },
        { text: 'לחברה הערבית', id: 4, name: 'S_MsAr' },
        { text: 'ליוצאי אתיופיה', id: 5, name: 'S_MsEt' },
        { text: 'לבעלי צרכים מיוחדים', id: 6, name: 'S_Gisha' },
        { text: 'מסלול דו חוגי', id: 7, name: 'S_MsDo' },
        { text: 'מסלול חד חוגי', id: 8, name: 'S_MsChad' },
      ],
    },
    {
      text: 'תעודה בסיום',
      id: 2,
      name: 'teuda',
      options: [
        { text: 'תעודת גמר/תעודת מקצוע', id: 1, name: 'T_graduation_certificate' },
        { text: 'תכנאי/ת', id: 2, name: 'T_technician' },
        { text: 'הנדסאי/ת', id: 3, name: 'T_engineer' },
        { text: 'השכלה תיכונית מלאה', id: 4, name: 'T_full_high_school_education' },
        { text: 'תעודת גמר/מקצוע', id: 5, name: 'T_graduation_certificate' },
        { text: 'תואר ראשון', id: 6, name: 'T_ba' },
        { text: 'תואר שני', id: 7, name: 'T_masters_dagree' },
        { text: 'תואר שלישי', id: 8, name: 'T_phd' },
      ],
    },
    {
      text: 'משך מסלול',
      id: 4,
      name: 'meshech',
      options: [
        { text: 'פחות משנה', id: 1, name: 'less_then_year' },
        { text: 'שנה', id: 2, name: 'one_year' },
        { text: 'שנתיים', id: 3, name: 'two_year' },
        { text: 'שלוש שנים', id: 4, name: 'three_year' },
        { text: 'ארבע שנים', id: 5, name: 'four_year' },
        { text: 'חמש שנים ומעלה', id: 6, name: 'five_year' },
      ],
    },
  ];
  const areaData = [
    { title: 'הנגב והדרום', id: 4, name: 'area' },
    { title: 'חיפה והצפון', id: 2, name: 'area' },
    { title: 'ירושלים וסביבתה', id: 1, name: 'area' },
    { title: 'תל אביב והמרכז', id: 3, name: 'area' },
  ];
  return { studyData, areaData };
}
