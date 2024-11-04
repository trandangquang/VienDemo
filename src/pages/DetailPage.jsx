import { Button, Col, Image, Radio, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import './DetailPage.scss';

const options = [
  {
    label: 'Apple',
    value: 'Apple',
  },
];

const optionsTime = [
  {
    label: '1 thang',
    value: '1 thang',
  },
];

const DetailPage = () => {
  const navigate = useNavigate();
  return (
    <Row className='container mx-auto mt-10'>
      <Col span={8}>
        <Image
          className='w-full'
          src='https://gamikey.com/wp-content/uploads/2022/03/Netflix-247x247.jpg.webp'
        />
      </Col>

      <Col span={16}>
        <div>
          <h2 className='font-semibold text-5xl'>
            Mua tai khoan Netflix Premium
          </h2>
        </div>
        <div>
          <p className='font-bold text-2xl pt-5'>10,000 VND</p>
        </div>
        <div className='pt-10'>
          <span className='font-bold text-2xl '> Goi dang ki</span>
          <Radio.Group
            block
            options={options}
            optionType='button'
            buttonStyle='solid'
            size='large'
            className='w-1/4 pt-5'
          />
        </div>
        <div className='pt-5 '>
          <span className='font-bold text-2xl '> Thoi han</span>
          <Radio.Group
            block
            options={optionsTime}
            optionType='button'
            buttonStyle='solid'
            size='large'
            className='w-1/4 pt-5'
          />
        </div>
        <div className='pt-8 '>
          <Button
            type='primary'
            onClick={() => navigate('/payment')}
            className='w-1/3 h-8 text-2xl'
          >
            Mua ngay
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default DetailPage;
