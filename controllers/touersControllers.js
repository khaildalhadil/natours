const fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/tours-simple.js`));

const deleteToure =((req, res) => {
  const targetId = req.params.id;
  res.send(tours.filter((el)=> el.id !== +targetId));
})

const getAllTours = ((req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  })
})

const getByToursId = ((req, res) => {
  const tour = tours.find((el) => el.id === +req.params.id);
  if (tour) {
    res.status(200).json({
      status: 'sucess',
      data: {
        tour
      }
    })
  } else {
    res.status(404).json({
      status: 'Not Found',
    })
  }
})

const addTours = ((req, res) => {
  console.log(req.body);
  const data = [{
    "id": tours.length+1,
    "name": req.body.name,
    "duration": req.body.duration,
    "maxGroupSize": req.body.maxGroupSize
  }]

  tours.push(data);

  res.status(200).json({
    status: 'sucess',
    results: 'pushed ✔',
    data
  })
})

const updateToure = ((req, res) => {

  const targetId = req.params.id;
  const targetTours = tours.find((el)=> el.id == +targetId);

  targetTours.name = req.body.name;
  tours.map((el) => el.id === +targetId ? targetTours: el);

  res.send({targetTours});
})

module.exports = {
  updateToure,
  addTours,
  getByToursId,
  getAllTours,
  deleteToure
}