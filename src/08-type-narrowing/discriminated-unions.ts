interface SuccessResult {
  status: "success";
  data: string;
}

interface ErrorResult {
  status: "error";
  message: string;
}

interface LoadingResult {
  status: "loading";
  progress: number;
}

type ApiResult = SuccessResult | ErrorResult | LoadingResult;

function handleResult(result: ApiResult): void {
  switch (result.status) {
    case "success":
      console.log("Data:", result.data);
      break;

    case "error":
      console.log("Error:", result.message);
      break;

    case "loading":
      console.log("Progress:", result.progress + "%");
      break;
  }
}

handleResult({
  status: "success",
  data: "Profile loaded successfully"
});

handleResult({
  status: "loading",
  progress: 65
});

handleResult({
  status: "error",
  message: "Unable to connect to server"
});


export {};