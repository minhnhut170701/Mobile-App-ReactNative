import img1 from "../image/1.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";
import img4 from "../image/4.jpg";
import img5 from "../image/Product/product-01.jpg";
import img6 from "../image/Product/product-02.jpg";
import img7 from "../image/Product/product-03.jpg";
import img8 from "../image/Product/product-04.jpg";
import img9 from "../image/Product/product-05.jpg";
import img10 from "../image/Product/product-06.jpg";
import img11 from "../image/Product/product-07.jpg";
import img12 from "../image/Product/product-08.jpg";
import img13 from "../image/Product/product-09.jpg";
import img14 from "../image/Product/product-10.jpg";
import img15 from "../image/Product/product-11.jpg";
import img16 from "../image/Product/product-12.jpg";
import img17 from "../image/Product/dt-1.png";
import img18 from "../image/Product/dt-2.png";
import img19 from "../image/Product/dt-3.png";
import img20 from "../image/Product/bh-1.jpg";
import img21 from "../image/Product/bh-2.jpg";



const PRODUCTS = [
    {
        id: '1', 
        img: img1, 
        caption: 'Áo thời trang', 
        pice: '350.000 đ', 
        discount: '25%',
        categoryId: '8',
            
        isNew: false,
        isSale: true,
    },

    {
        id: '2', 
        img: img2, 
        caption: 'Áo thời trang nữ',
        pice: '120.000 đ', 
        discount: '35%',
        categoryId: '8',
        isNew: true,
        isSale: true,
    },

    {
        id: '3', 
        img: img3, 
        caption: 'Thời trang mùa hè',
        pice: '430.000 đ', 
        discount: '15%',
        categoryId: '8',
         
        isNew: false,
        isSale: false,
        isCart:true
    },

    {
        id: '4', 
        img: img4, 
        caption: 'Áo thời trang uniform',
        pice: '200.000 đ', 
        discount: '5%',
        categoryId: '8',
            
        isNew: false,
        isSale: false,
         
    },

    {
        id: '5', 
        img: img5, 
        caption: 'Áo thun năng động',
        pice: '200.000 đ', 
        discount: '5%',
        categoryId: '8',
            
        isNew: true,
        isSale: true,
         
    },
    {
        id: '6', 
        img: img6, 
        caption: 'Áo công sở',
        pice: '300.000 đ', 
        discount: '5%',
        categoryId: '8',
            
        isNew: true,
        isSale: false,
         
    },
    {
        id: '7', 
        img: img7, 
        caption: 'Sơ mi nam',
        pice: '230.000 đ', 
        discount: '5%',
        categoryId: '1',
            
        isNew: false,
        isSale: true,
         
    },
    {
        id: '8', 
        img: img8, 
        caption: 'Phong cách',
        pice: '150.000 đ', 
        discount: '5%',
        categoryId: '8',
            
        isNew: true,
        isSale: true,
         
    },
    {
        id: '9', 
        img: img9, 
        caption: 'Trang phục nữ',
        pice: '500.000 đ', 
        discount: '5%',
        categoryId: '8',
            
        isNew: true,
        isSale: false,
         
    },
    {
        id: '10', 
        img: img10, 
        caption: 'Đồng hồ đen',
        pice: '600.000 đ', 
        discount: '15%',
        categoryId: '1',
            
        isNew: true,
        isSale: true,
         
    },
    {
        id: '11', 
        img: img11, 
        caption: 'Suit nữ',
        pice: '240.000 đ', 
        discount: '55%',
        categoryId: '8',
            
        isNew: false,
        isSale: false,
         
    },
    {
        id: '12', 
        img: img12, 
        caption: 'Áo thun nữ',
        pice: '160.000 đ', 
        discount: '35%',
        categoryId: '8',
            
        isNew: true,
        isSale: true,
         
    },
    {
        id: '13', 
        img: img13, 
        caption: 'Giày thể thao',
        pice: '700.000 đ', 
        discount: '25%',
        categoryId: '6',
            
        isNew: true,
        isSale: true,
         
    },
    {
        id: '14', 
        img: img14, 
        caption: 'Áo thời trang uniform',
        pice: '250.000 đ', 
        discount: '15%',
        categoryId: '8',
            
        isNew: false,
        isSale: true,
         
    },
    {
        id: '15', 
        img: img15, 
        caption: 'Sơ mi cho nam',
        pice: '150.000 đ', 
        discount: '20%',
        categoryId: '1',
            
        isNew: false,
        isSale: true,
         
    },
    {
        id: '16', 
        img: img16, 
        caption: 'Dây nịch thời trang',
        pice: '240.000 đ', 
        discount: '13%',
        categoryId: '1',
            
        isNew: true,
        isSale: true,
         
    },
    {
        id: '17', 
        img: img17, 
        caption: 'Bảng vẽ',
        pice: '2.000.000 đ', 
        discount: '20%',
        categoryId: '2',
            
        isNew: false,
        isSale: false,
         
    },
    {
        id: '18', 
        img: img18, 
        caption: 'Iphone 12 pro bản tím',
        pice: '20.000.000 đ', 
        discount: '40%',
        categoryId: '2',
        isNew: true,
        isSale: true,
         
    },
    {
        id: '19', 
        img: img19, 
        caption: 'Iphone 12 pro',
        pice: '23.000.000 đ', 
        discount: '10%',
        categoryId: '2',
            
        isNew: true,
        isSale: false,
         
    },

    {
        id: '20', 
        img: img20, 
        caption: 'Bàn học cho hoc sinh',
        pice: '240.000 đ', 
        discount: '10%',
        categoryId: '9',
        isNew: true,
        isSale: false,
         
    },
    {
        id: '21', 
        img: img21, 
        caption: 'Bàn làm việc',
        pice: '450.000 đ', 
        discount: '25%',
        categoryId: '9',
            
        isNew: true,
        isSale: true,
         
    },









]


export default PRODUCTS;