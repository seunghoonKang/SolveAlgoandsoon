word = input().upper()
word_list = list(set(word)) 

cnt = []
for i in word_list:
  cnt.append(word.count(i))

max_cnt = max(cnt)
index_max_cnt = cnt.index(max_cnt)

if cnt.count(max_cnt) > 1:
  print('?')
else:
  print(word_list[index_max_cnt])