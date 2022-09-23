def char2bfk(char):
    li=ord(char)
    str=">+++++[<"
    for i in range(int(li/5)):
        str+="+"
    str+=">-]<"
    for i in range(li%5):
        str+="+"
    str+=".>\n"
    return str

def str2bfk(args):
    str=""
    for i in range(len(args)):
        str+=char2bfk(args[i])
    return str

a = input("enter string to convert to bfk :")

print(str2bfk(a))
