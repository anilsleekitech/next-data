export default function Pricing() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://devnagri.com/pricing',
      permanent: false,
    },
  };
}
