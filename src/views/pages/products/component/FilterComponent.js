import React from "react"
import { Accordion, Container } from 'react-bootstrap'
import './FilterComponent.scss'

function FilterComponent(props) {
    const filters = [
        {
            name: 'Độ bọt',
            values: ['vang sủi', 'vang không sủi']
        },
        {
            name: 'Màu sắc',
            values: ['Đỏ', 'Rose', 'Trắng']
        },
        {
            name: 'Giá',
            values: ['< 300 000đ', '300 000đ - 400 000đ', '400 000đ - 600 000đ', '600 000đ - 1 000 000đ', '1 000 000đ - 1 500 000đ', '> 1 500 000']
        },
        {
            name: 'Dung tích',
            values: ['vang sủi', 'vang không sủi']
        },
        {
            name: 'Hàm lượng đường',
            values: ['vang sủi', 'vang không sủi']
        },
        {
            name: 'Độ cồn   ',
            values: ['vang sủi', 'vang không sủi']
        },
        {
            name: 'Nhà sản xuất',
            values: ['vang sủi', 'vang không sủi']
        },
        {
            name: 'Thực phẩn phù hợp',
            values: ['vang sủi', 'vang không sủi']
        }

    ]
    console.log(filters);

    return (
        <Container className="filter-component-wrapper">
            <h1>Rượu</h1>
            <div className="filter-group">
                <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
                    {filters.map((item, idx) => (
                        <Accordion.Item eventKey={idx.toString()} key={idx} className={'filter-item'}>
                            <Accordion.Header className="item-header">{item.name}</Accordion.Header>
                            {item.values.map((value, _id) => (
                                <Accordion.Body key={_id}>
                                    <input type="checkbox" id={_id} name={value} value={value} />
                                    <label htmlFor={value}>{value}</label>
                                </Accordion.Body>
                            ))}
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </Container>
    )
}
export { FilterComponent }