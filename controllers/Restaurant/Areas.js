import restaurantAreas from "../../database/restaurantAreas.js";

export const getAreas = async (req, res) => {
  try {
    const areas = await restaurantAreas.find({});
    res.status(200).send({
      message: "Retrieved successfully",
      areas,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postAreas = async (req, res) => {
  try {
    const {
      name,
      status,
      description,
      restaurant,
      maxCover,
      totalCover,
      active,
    } = req.body;

    const newArea = new restaurantAreas({
      name,
      status,
      description,
      restaurant,
      maxCover,
      totalCover,
      active,
    });

    await newArea.save();
    res.status(201).send({
      message: "A new restaurant has been successfully created",
      success: true,
      newArea,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      messgae: "An Internal server error",
      success: false,
    });
  }
};

export const putAreas = async (req, res) => {
  try {
    const { name, description, maxCover, active } = req.body;
    const { id } = req.params;

    const updatedArea = await restaurantAreas.findByIdAndUpdate(
      id,
      {
        name,
        description,
        active,
        maxCover,
      },
      { new: true }
    );
    console.log(updatedArea);
    if (!updatedArea) {
      return res
        .status(404)
        .send({ message: "Oops Something went wrong", success: false });
    }
    res
      .status(200)
      .send({ message: "Successfully Updated", updatedArea, success: true });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAreas = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteArea = await restaurantAreas.findByIdAndDelete(id);
    res.status(200).send({
      message: "Successfully deleted",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
