import json

with open("Flipkart_Forecast.json") as f:
  data = json.load(f)

mydata = {
  i : {
    "Name" : data["Name"][str(i)],
    "Price" : data["Price"][str(i)],
    "Forcast" : data["Forecast"][str(i)],
    "Change" : data["Change"][str(i)],
    "ChangeInPer" : data["Change in %"][str(i)]
  }
  for i in range(len(data["Name"]))
}

with open("Flipkart_data_filter.json","w") as f:
  json.dump(mydata, f, indent=4)
