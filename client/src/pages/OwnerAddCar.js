import { Col , Row , Form , Input} from 'antd'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import OwnerDefaultLayout from '../components/OwnerDefaultLayout'
import Spinner from '../components/Spinner'
import { owneraddCar } from '../redux/actions/carsActions'
function OwnerAddCar() {

    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)

    function onFinish(values){

         values.bookedTimeSlots=[]

         dispatch(owneraddCar(values))
         console.log(values)
    }

    return (
        <OwnerDefaultLayout>
               {loading && (<Spinner />)}
               <Row justify='center mt-5'>
                   <Col lg={12} sm={24} xs={24} className='p-2'>
                       <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                           <h3>Add New Car</h3>
                           <hr />
                           <Form.Item name='name' label='Car name' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='image' label='Image url(please keep google drive link of image)' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='rentPerHour' label='Rent per hour' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='capacity' label='Capacity' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='fuelType' label='Fuel Type' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='carno' label='Carno' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='address' label='Address' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='area' label='Area' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='ownerid' label='phoneno' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           {/* <Form.Item name='available' label='Available' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item> */}

                           <div className='text-right'>
                           <button className='btn1'>ADD CAR</button>
                           </div>

                       </Form>
                   </Col>
               </Row>

        </OwnerDefaultLayout>
    )
}

export default OwnerAddCar