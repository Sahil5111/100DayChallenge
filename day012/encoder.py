def encode(strings):
    li=[]
    for elem in range(len(strings)):
        li.append(ord(strings[elem]))
    print(li)
    li[0]=161-li[0]
    li[1]=166-li[1]
    for x in range(len(li)-4):
        li[x+2]=152-li[x+2]
    li[-2]=166-li[-2]    
    li[-1]=161-li[-1]
    str=''
    for elem in range(len(li)):
        str= str+chr(li[elem])    
    print(li)
    print(str)

while(1):
    encode(input('enter a string\n'))