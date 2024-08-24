import React from 'react';
// Function to fetch data
const fetchData = async () => {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return data;
};

const Revalidate = ({ data }) => {
  return (
    <div style={{marginTop:'200px'}}>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetchData();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}

export default Revalidate;
