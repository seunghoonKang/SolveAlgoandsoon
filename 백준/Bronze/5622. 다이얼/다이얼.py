alphabet = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','XWYZ']
time = 0
dial = input().upper()

for i in range(len(dial)) :
    for j in alphabet :
        if dial[i] in j :
            time += alphabet.index(j)+3
print(time)