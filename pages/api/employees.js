const database = [
  {
    name: "Parker Rowe",
    team: "BE",
    startDate: "2021-05-01",
  },
  {
    name: "Harshul Mehta",
    team: "MATLAB",
    startDate: "2021-05-01",
  },
  {
    name: "Naod Dereje",
    team: "MATLAB",
    startDate: "2021-05-01",
  },
  {
    name: "Caren Liu",
    team: "FE",
    startDate: "2021-05-01",
  },
  {
    name: "Reid Moffat",
    team: "BE",
    startDate: "2022-05-01",
  },
];

export default function handler(req, res) {
  res.status(200).json(database);
}
