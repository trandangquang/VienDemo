import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const CardComponent = () => {
  const navigate = useNavigate();

  // const apiKey =
  //   'patNgusgHThUIXq5w.c341b20ee3dcad6b2498d0e22f81171c76fa469dfacb702c06412f6482fb4b1a';
  // const baseId = 'appQSYQh1ixXgNMBM';
  // const tableName = 'tblJDaWbmwNfSdMYX';

  // async function fetchData() {
  //   const url = `https://airtable.com/${baseId}/${tableName}`;

  //   const response = await fetch(url, {
  //     headers: {
  //       Authorization: `Bearer ${apiKey}`,
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error(`Error: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   console.log('data', data.records);
  //   return data.records;
  // }

  // fetchData()
  //   .then((records) => {
  //     console.log('Fetched records:', records);
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching data:', error);
  //   });

  return (
    <Row className='rounded-xl'>
      <Col span={10}>
        <img
          className='rounded-l-xl cursor-pointer'
          src='https://gamikey.com/wp-content/uploads/2022/03/Netflix-247x247.jpg.webp'
          alt=''
          onClick={() => navigate('/detail')}
        />
      </Col>
      <Col className='bg-[#ffffff] rounded-r-xl relative pl-4' span={14}>
        <h2
          className='font-semibold text-2xl pt-2 cursor-pointer hover:text-orange-500 '
          onClick={() => navigate('/detail')}
        >
          Mua tai khoan Netflix Premium
        </h2>
        <p className='font-bold text-2xl absolute bottom-0'>10,000 VND</p>
      </Col>
    </Row>
  );
};

export default CardComponent;
