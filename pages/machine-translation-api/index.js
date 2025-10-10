export default function MachineTranslationApi() {
    return null;
  }
  
  export async function getServerSideProps() {
    return {
      redirect: {
        destination: 'https://devnagri.com/translation-api',
        permanent: true,
      },
    };
  }
  