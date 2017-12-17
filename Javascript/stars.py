''' def stars():
    i =0;
    count = 0
    x = [4, 6, 1, 3, 5, 7, 25]
    for num in range(0,len(x)):
        print '\n'
        for num in range(0,x[count]):
            print '*',         
            i+=1
        count +=1
stars() '''

def stars():
    x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"] 
    for num in range(0,len(x)):
         if type(x[num]) == int:
             print '\n'
             for i in range(0,x[num]):
                 print '*',
         elif type(x[num]) == str:
            single = x[num]
            print '\n'
            for num in range(0,len(single)):
               print single[0].lower(),
             
stars()