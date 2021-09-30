import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
    {
      name: 'Vaishnavi',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
  ],
    doctors:[
        {
        
            name: 'Dr.Milind Waykole (Sanjeevan Heart Hospital)',
            category :"Cardiology Doctor",
            qualification:"MBBS, MD (Medicine), DM (Cardiology), Fellowship in Interventional Cardiology (Germany)",
            address:"C/o Sanjeevan Heart Hospital, 6, Yashshree, Dhake Colony, Pratap Nagar, Jalgaon ",
            phone:919511660277,
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 1,
        },
        {
         
            name: "RHYTHM Heart & Vascular Clinic",
            
            qualification: "Cardiologists , Echocardiologists",
            address: "Chowfuli, Datta Colony, Khajamiya Road, Khajamiya Roadring Road, Ganesh Colony, Jalgaon - 425001",
            phone: 919422277782,
            category :"Cardiology Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 1,
          },{
          
            name: "Dr.Varun Sarode(Swara Hospital)",
            
            qualification: "MBBS, MD (Medicine), DM (Cardiology), Fellowship in Interventional Cardiology (Germany)",
            address: "Swara Hospital behind Brooke bond coloney, near bahinabai udyan, Jalgaon, 425001",
            phone: 919922307744,
            category :"Pediatric Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 1,
          },{
           
            name: "Dr Milind Josh(Happy Kids Hospital)",
            
            qualification: "M.S.,M.Ch.,D.N.B.,FIAGES,FALS,PGDMLS",
            address: "174,175, Balaji Tower, Neri Naka, Jalgaon- 425001",
            phone: 91,
            category :"Pediatric Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
          
            name: "Smile Care Dental And Orthodontics Clinic",
            "email": "abc@gmail.com",
            qualification: "Dentists , Dental Surgeons",
            address: "10, Ring Rd, near Mahesh Pragati Mandal, Hareshwar Nagar, Ganesh Colony, Jalgaon, Maharashtra 425001",
            phone: 91,
            category :"Dentist",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
          
            name: "Dr. Vaibhav P. Sarode Dental Speciality Clinic",
            
            qualification: "Dentist",
            address: "131, Near Padmalaya Bhojanalaya, Gandhi Nagar, Jilha Peth, Jalgaon, Maharashtra 425001",
            phone: 91,
            category :"Dentist",
            fees: 500,
            rating: 5,
            numReviews: 10,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
         
            name: "Dr. Girish Narkhede - Best Skin Doctor in Jalgaon",
            "email": "abc@gmail.com",
            qualification: "Dermatologist",
            address: "Shop no.21, Priyadarshini Apartment Besides National Highway Prabhat Chowk, Jalgaon, Maharashtra 425001",
            phone: 91,
            category :"Dermatology Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
           
            name: "Dr Mona Borole,(Vedant Skin and Cosmetic Clinic)",
            "email": "abc@gmail.com",
            qualification: "MBBS, MD- Dermatology",
            address: "Khadke & Chadhari Constructions Building, Opp Bhaskar Market Gate, MJ College Rd, Jalgaon, Maharashtra 425001",
            phone: 91,
            category :"Dermatology Doctor",
            fees: 500,
            rating: 5,
            numReviews: 12,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
           
            name: "Dr Sanjeev Zambare(Suyash Hospital)",
            "email": "abc@gmail.com",
            qualification: "Otolaryngologist",
            address: "M j college Rd, Bhaskar Market Rd, near dr pratap jadhav, Jalgaon, Maharashtra 425001",
            phone: 91,
            category :"ENT Specialist Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
          
            name: "Saifee's K K Hospital",
            "email": "abc@gmail.com",
            qualification: "Otolaryngologist",
            address: "Plot40, Onkar Nagar, Behind New Bus Stand, near Kashinath Lodge, Jaikisan Wadi, Jalgaon, Maharashtra 425001",
            phone: 91,
            category :"ENT Specialist Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
          
            name: "Dr.Rahul Chaudhari",
            "email": "abc@gmail.com",
            qualification: "Orthopedic surgeon",
            address: "Ruby Hospital, near Bahinabai Garden, Jalgaon, Maharashtra 425001",
            phone: 919823246065,
            category :"Orthopedic Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
           
            name: "Dr.Pankaj Gujarl",
            "email": "abc@gmail.com",
            qualification: "Orthopedic surgeon",
            address: "6, Ring Rd, Pratap Nagar, Jalgaon, Maharashtra 425001",
            phone: 917947368867,
            category :"Orthopedic Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
            
            name: "Doctor A. G. Bhangale Hospital",
            "email": "abc@gmail.com",
            qualification: "General Surgeon",
            address: "334, Omkar Nagar, Jilha Peth, Jalgaon, Maharashtra 425001",
            phone: 91,
            category :"General Surgeons",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
            
            name: "Dr. Rucha Naval",
            
            qualification: "General Surgeon",
            address: "MJ College Rd, near Bhaskar Market, Pratap Nagar, Jalgaon, Maharashtra 425001",
            phone: 91,
            category :"General Surgeons",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
          
            name: "Dr. Sunil Thatte (Thatte Hospital)",
            "email": "abc@gmail.com",
            qualification: "Pulmonologist, Tuberculosis Doctor",
            address: "Building No 5, Khandesh Mill Shopping Complex, Jalgaon Bazar, Jalgaon - 425001",
            phone: 91,
            category :"Pulmonologist Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
          
            name: "Dr. Mandar Pandit (Pandit Hospital And Critical ",
            "email": "abc@gmail.com",
            qualification: "Pulmonologist",
            address: "Subhag Wadi, Ring Road, Jalgaon, Jalgaon - 425003, NEAR JDCC BANK",
            phone: 917947369229,
            category :"Pulmonologist Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
          
            name: "Dr. Vasant M. Joshi",
          
            qualification: "General practitioner",
            address: "135, Suvridhi Appt., Adarsh Nagar, Jalgaon, Maharashtra 425002",
            phone: 919422783415,
            category :"General Physician Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
           
            name: "Dr Sunil Kotwal",
            "email": "abc@gmail.com",
            qualification: "General practitioner",
            address: "182/10, Pimprala Rd, Bhikamchand Jain Nagar, Muktainagar, Jalgaon, Maharashtra 425001",
            phone: 91,
            category :"General Physician Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
           
            name: "Prism Hospital-superspeciality Gastro-Liver and endoscopy Centre  ",
            
            qualification: "4w4rwew",
            address: "Nirmal building, Bhaskar Market Rd, opposite navjeevan supershopee, area, Jalgaon, Maharashtra 425001",
            phone: 91,
            category :"Gastroenterologist Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
          },{
           
            name: "Shobha Hospital and superspeciality gastroenterology center",
            "email": "abc@gmail.com",
            qualification: "MBBS",
            address: "Sindhi Colony Rd, near Panchmukhi Hanuman mandir, Ranchos Nagar, Devidas Colony, Jalgaon, Maharashtra 425001",
            phone: 91,
            category :"Gastroenterologist Doctor",
            fees: 500,
            rating: 5,
            numReviews: 11,
            image: '/images/D1.jpg',
            countInStock: 0,
        
          },
          
    ]
    
    
};
export default data;