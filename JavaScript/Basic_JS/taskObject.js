var student = {
    data: [
      {
        name: {
          first: "Rahul",
          last: "Jaiswal",
        },
        location: {
          India: {
            State: [
              {
                name: "MH",
                city: [
                  {
                    name: "Nagpur", //pune
                    area: {
                      sector: "1011",
                    },
                  },
                ],
              },
              {},
            ],
          },
        },
      },
      {},
      {},
    ],
    info: {
      college: "xyz",
      uni: "xyz",
    },
  };
  
  //Print the Sector Value
    console.log(student.data[0].location.India.State[0].city[0].area.sector);


  //Update City and Print it
  student.data[0].location.India.State[0].city[0].name = "Pune";
  console.log(student.data[0].location.India.State[0].city[0].name);
