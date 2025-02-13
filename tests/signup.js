import http from "k6/http";
import uuid from "./libs/uuid.js";
import { sleep, check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

//definir virtual users e duration dos testes
//thresholds chave de limite para duração de uma requisição
export const options = {
  vus: 10,
  duration: "30s",
  thresholds: {
    http_req_duration: ["p(95)<2000"], // 95% das requisições devem responder em até 2s
    http_req_failed: ["rate<0.01"], //1% das req. podem ocorrer erros
  },
};

export default function () {
  const url = "http://localhost:3333/signup";
  //JSON modulo nativo do JS, stringfy função JS que transforma um objeto json em uma string mantendo o seu formato

  const payload = JSON.stringify({
    email: `${uuid.v4().substring(24)}@qa.e2ecoders.com`,
    password: "Teste@123!",
  });

  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, headers);
  //console.log(res.body);
  check(res, {
    "status should be 201": (r) => r.status === 201, //parse do objeto res
  });
  sleep(1);
}
