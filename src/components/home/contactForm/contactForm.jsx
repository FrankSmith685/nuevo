import React from 'react';
import { Form, Input, Button, Checkbox, Select, Row, Col } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Option } = Select;

const ContactForm = ({ handleSubmit }) => {
  const onFinish = (values) => {
    handleSubmit(values);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 bg-gray-100 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contacta con nosotros</h2>
        <Form
          name="contact-form"
          onFinish={onFinish}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Nombre" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Por favor ingresa tus apellidos' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Apellidos" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico' }]}
              >
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="company"
                rules={[{ required: true, message: 'Por favor ingresa el nombre de tu empresa' }]}
              >
                <Input prefix={<EnvironmentOutlined />} placeholder="Empresa" />
              </Form.Item>
            </Col>
          </Row>
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
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Por favor ingresa tu número de teléfono' }]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="Teléfono" />
          </Form.Item>
          <Form.Item
            name="province"
            rules={[{ required: true, message: 'Por favor ingresa tu provincia' }]}
          >
            <Input prefix={<EnvironmentOutlined />} placeholder="Provincia" />
          </Form.Item>
          <Form.Item
            name="referral"
            rules={[{ required: true, message: 'Por favor ingresa cómo nos has conocido' }]}
          >
            <Input placeholder="¿Cómo nos has conocido?" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="privacy" valuePropName="checked" noStyle>
              <Checkbox>Acepto la política de privacidad</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    
  );
};

export default ContactForm;
