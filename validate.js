//VALID CHILEAN RUT
export const isRutValid = (rut) => {
    if (!rut || rut.trim().length < 3) return false
    const cleanRut = rut.replace(/[^0-9kK-]/g, "")
  
    if (cleanRut.length < 3) return false
  
    const split = cleanRut.split("-")
    if (split.length !== 2) return false
  
    const num = parseInt(split[0], 10)
    const dgv = split[1]
  
    const dvCalc = calculateDV(num)
    return dvCalc === dgv
}

export const calculateDV = (rut) => {
    const body = `${rut}`
    let sum = 0
    let multiple = 2
  
    for (let i = 1; i <= body.length; i++) {
      const index = multiple * body.charAt(body.length - i)
  
      sum += index
  
      if (multiple < 7) {
        multiple += 1
      } else {
        multiple = 2
      }
    }
  
    const dvExpected = 11 - (sum % 11)
    if (dvExpected === 10) return "k"
    if (dvExpected === 11) return "0"
    
    return `${dvExpected}`
}

//VALID EMAIL
export const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

//PASSWORD MIN 8 CHARS + ONE MAYUS + ONE NUMBER + ONE SPECIAL CHAR
export const isPasswordValid = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_*?&])[A-Za-z\d@$!%_*?&]{8,}$/.test(password)
}

//NAME MAX 30 CHARACTERS + ONLY LETTERS + ACCENTS AND Ñ
export const isNameValid = (name) => {
    return /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]{0,30}$/.test(name)
}

//VALID UUID
export const isUUIDValid = (number) => {
    return /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/.test(number)
}