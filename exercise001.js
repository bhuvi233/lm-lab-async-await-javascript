const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

// .then().catch()
// const result = promise
//               .then(res => console.log(`Yay! Promise resolved with response: ${res}`))
//               .catch(error => console.log(`Boo. Promise rejected with response: ${error}`));

//async await

const getPromise = async() => {
  try {
    const response = await promise;
    console.log(`Yay! Promise resolved with response: ${response}`);
  } catch(e) {
    console.log(`Boo. Promise rejected with response: ${e}`)
  }
}

getPromise();