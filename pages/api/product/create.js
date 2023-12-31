import connectDatabase from "@/db/connect";
import product from "@/db/models/product";

export default async function handler(req, res) {
  await connectDatabase();
  const {
    name,
    modelNumber,
    color,
    doorStyle,
    constructionType,
    features,
    cabinetStyle,
    productImages,
    description,
    assemblyInstructions,
    downloadInformation,
    collections,
    category,
  } = JSON.parse(req.body);

  console.log(productImages);

  const product_ = new product({
    name,
    category,
    modelNumber,
    color,
    doorStyle,
    constructionType,
    features,
    cabinetStyle,
    productImages,
    description,
    assemblyInstructions,
    downloadInformation,
    collections,
  });

  await product_.save();

  res.status(200).json({
    success: true,
    message: "Product created successfully",
  });
}
