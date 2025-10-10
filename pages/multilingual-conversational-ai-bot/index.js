export default function MultilingualConversationalAiBot() {
    return null;
  }
  
  export async function getServerSideProps() {
    return {
      redirect: {
        destination: 'https://devnagri.com/voice-bot',
        permanent: true,
      },
    };
  }
  