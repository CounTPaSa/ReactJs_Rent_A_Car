import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { number, object, string } from 'yup';
import FormikInput from '../../components/FormikInput/FormikInput';
import { titleValidator } from '../../utils/customValidations';

type Props = {}

const AddProduct = (props: Props) => {

    const initialValues =
    {
        title:"",
        description:"",
        price:1,
        stock:0,
    };

    const validationSchema = object
    (
        {
            title: string().required("Baslik alani zorunludur! ").min(3, "Urun ismi min 3 karakter olmalidir!").max(50)
            .test
            (
                "my-custom-rule",
                "Lutfen gecerli bir urun ismi giriniz",
                titleValidator 
            ),
            description: string().required().min(20).max(300),
            price: number().required().positive(),
            stock: number().required().min(0).integer(),
                       
        }
    )
    

    return (
    <div className="container mt-5">
        <Formik 
        initialValues={initialValues}
         onSubmit={values => 
         {
            console.log(values)
         }}
         validationSchema={validationSchema}

         >

			<Form>
				
               <FormikInput name="title" label="Urun Adi" placeholder="Urun adi giriniz.."></FormikInput>
               <FormikInput name="description" label="aciklama." placeholder="Urun aciklamasi giriniz.."></FormikInput>
               <FormikInput name="price" label="Fiyat" type="number"></FormikInput>
               <FormikInput name="stock" label="Stok Adedi" type="number"></FormikInput>
				<button type="submit" className="btn btn-primary">
					Ekle
				</button>
			</Form>
         </Formik>
		</div>
  );
}

export default AddProduct