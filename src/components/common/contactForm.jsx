import React from 'react';
import { Form, Input, Button, Checkbox, Select, Row, Col } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Option } = Select;

const ContactForm = ({ handleSubmit, id }) => {
  const onFinish = (values) => {
    handleSubmit(values);
  };

  return (
    <div className="flex justify-center items-center h-auto py-16 px-10 bg-gray-100 w-full" id={id}>
      <div className="bg-transparent mx-auto w-11/12">
        <h2 className="text-lg font-bold text-start mb-4 text-gray-600">Contacta con nosotros</h2>
        <p className="text-sm text-start mb-4 text-gray-800">
          Somos expertos en Consultoría y gestión del cambio, Selección y Headhunting y servicios de HR Business Partner. Creemos que cada empresa merece su oportunidad de crecer. ¿Te ayudamos?
        </p>
        <Form
          name="contact-form"
          onFinish={onFinish}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Nombre" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Por favor ingresa tus apellidos' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Apellidos" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico' }]}
              >
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <Form.Item
                name="company"
                rules={[{ required: true, message: 'Por favor ingresa el nombre de tu empresa' }]}
              >
                <Input prefix={<EnvironmentOutlined />} placeholder="Empresa" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Por favor ingresa tu número de teléfono' }]}
              >
                <Input prefix={<PhoneOutlined />} placeholder="Teléfono" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                name="province"
                rules={[{ required: true, message: 'Por favor ingresa tu provincia' }]}
              >
                <Input prefix={<EnvironmentOutlined />} placeholder="Provincia" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="interest"
                rules={[{ required: true, message: 'Por favor selecciona tu interés' }]}
              >
                <Select placeholder="¿En qué estás interesado?">
                  <Option value="Consultoría y gestión del cambio">Consultoría y gestión del cambio</Option>
                  <Option value="Selección y Headhunting">Selección y Headhunting</Option>
                  <Option value="HR Business Partner">HR Business Partner</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="referral"
                rules={[{ required: true, message: 'Por favor ingresa cómo nos has conocido' }]}
              >
                <Input placeholder="¿Cómo nos has conocido?" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Form.Item name="privacy" valuePropName="checked" noStyle>
              <Checkbox>Acepto la política de privacidad</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className='w-1/12 mx-auto'>
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
