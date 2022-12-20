import json
import pywhatkit


j = open("contacts.json")
data= json.load(j)
print(data)

for item in data :
    i=57

    pywhatkit.sendwhatmsg(item["contact"], "This message was sent from logic.py file to : "+ item["name"], 14,i,15,False)
    print('messange sent to :' , item["name"])