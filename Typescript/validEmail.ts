const validEmail=(email:string)=>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}
console.log(validEmail("user.friendly@gmail.com"))
console.log(validEmail("example@example.com")); 
console.log(validEmail("not an email"));