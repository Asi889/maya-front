function LightBulb() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      // aria-hidden="true"
      style={{ MsTransform: 'rotate(360deg)' }}
      transform="rotate(360)"
      viewBox="0 0 24 24"
    >
      <path
        fill="#626262"
        d="M12 6a6 6 0 016 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 016-6m2 15v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1h4m6-10h3v2h-3v-2M1 11h3v2H1v-2M13 1v3h-2V1h2M4.92 3.5l2.13 2.14-1.42 1.41L3.5 4.93 4.92 3.5m12.03 2.13l2.12-2.13 1.43 1.43-2.13 2.12-1.42-1.42z"
      />
    </svg>
  );
}

export default LightBulb;
