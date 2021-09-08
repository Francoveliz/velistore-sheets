import * as yup from "yup";

export const validationSchema = yup.object({
	nombre: yup.string().required("Campo obligatorio"),
	metodoDePago: yup.string().required("Campo obligatorio"),
	domicilio: yup.string().required("Campo obligatorio"),
});
