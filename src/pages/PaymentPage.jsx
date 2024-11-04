import { Button, Col, Input, Row, message } from 'antd';
import './PaymentPage.scss';

const PaymentPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'thanh toan thanh cong',
    });
  };

  return (
    <Row className='container mx-auto'>
      <Col className='flex items-center justify-center py-10' span={24}>
        <h1 className='text-5xl font-bold '>Thanh toan</h1>
      </Col>

      <Col span={2}>
        <img
          className='rounded-xl cursor-pointer'
          src='https://gamikey.com/wp-content/uploads/2022/03/Netflix-247x247.jpg.webp'
          alt=''
        />
      </Col>

      <Col span={8} className='pl-8 relative'>
        <h2 className='font-semibold text-2xl cursor-pointer hover:text-orange-500 '>
          Mua tai khoan Netflix Premium
        </h2>
        <p className='font-bold text-2xl absolute bottom-3'>69,000 VND</p>
      </Col>

      <Col span={4}>
        <div className='font-semibold text-2xl'>
          <span>So luong</span>
        </div>
        <div className='flex pt-6'>
          <Button>+</Button>
          <Input defaultValue='1' />
          <Button>-</Button>
        </div>
      </Col>

      <Col offset={10}></Col>

      <Col span={24} className='pt-10'>
        {contextHolder}
        <Button type='primary' onClick={success} className='w-1/4 text-2xl'>
          Dat hang
        </Button>
      </Col>
    </Row>
  );
};

export default PaymentPage;
