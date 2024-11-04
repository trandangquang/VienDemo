import { Col, Row } from 'antd';
import CardComponent from '../components/CardComponent';

const ProductPage = () => {
  return (
    <>
      <Row className='bg-[#f0f2f5]'>
        <Row className='container mx-auto'>
          <Col className='flex items-center justify-center py-10' span={24}>
            <h1 className='text-5xl font-bold '>Products</h1>
          </Col>
        </Row>
        <Row className='container !mx-auto' gutter={[16, 24]}>
          <Col className='gutter-row' span={6}>
            <CardComponent />
          </Col>
          <Col className='gutter-row' span={6}>
            <CardComponent />
          </Col>
          <Col className='gutter-row' span={6}>
            <CardComponent />
          </Col>
          <Col className='gutter-row' span={6}>
            <CardComponent />
          </Col>
          <Col className='gutter-row' span={6}>
            <CardComponent />
          </Col>
          <Col className='gutter-row' span={6}>
            <CardComponent />
          </Col>
          <Col className='gutter-row' span={6}>
            <CardComponent />
          </Col>
          <Col className='gutter-row' span={6}>
            <CardComponent />
          </Col>
          <Col className='gutter-row' span={6}>
            <CardComponent />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default ProductPage;
