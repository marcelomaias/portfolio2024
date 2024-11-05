"use server"

export const sendEmail = async (formData) => {
  console.log("Running on server")
  console.log(formData.get('email'))
  console.log(formData.get('message'))
}