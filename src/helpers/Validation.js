// Archivo de validaciones
export const Validations = (dataValidation) => {
  // Verificar que no haya campos vacíos
  for (const key in dataValidation) {
    if (
      dataValidation[key] === "" ||
      dataValidation[key] === null ||
      dataValidation[key] === undefined
    ) {
      alert(`⚠️ El campo ${key} no puede estar vacío.`);
      return false; // Retorna false si encuentra un campo vacío
    }
  }

  // Verificar que Name, LastName y WorkPosition contengan solo letras
  const letterRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if (!letterRegex.test(dataValidation.Name)) {
    alert("⚠️ El campo Name debe contener solo letras.");
    return false;
  }

  if (!letterRegex.test(dataValidation.LastName)) {
    alert("⚠️ El campo LastName debe contener solo letras.");
    return false;
  }

  if (!letterRegex.test(dataValidation.WorkPosition)) {
    alert("⚠️ El campo WorkPosition debe contener solo letras.");
    return false;
  }

  console.log("Todos los campos son válidos.");
  return true; // Retorna true si todas las validaciones pasan
};
