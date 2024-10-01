

// meta data built in function to overwrite the default meta data in layout
export function generateMetadata({params}) {
return{
  title:  params.productSlug,
}
}
export default function Product({params}) {
  console.log(params);
  return (
    <>
     <span>Product : {params.productSlug}</span>
    </>
  );
}
