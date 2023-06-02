#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int maxn(int n1, int n2)
{
    return n1 > n2 ? n1 : n2;
}

int lengthOfLongestSubstring(char *s)
{
    int Currmax = 0;
    int Prevmax = 0;
    int limit =0;
    bool flag;
    for (int i = 0; i < strlen(s); i++)
    {
        for (int j = i - 1; j >= limit; j--)
        {
            if (s[i]!=s[j])
            {
                flag=true;
                printf("%d %d \t%d %d\t %d \n ",i,j,Currmax,Prevmax,flag);
            }
            else{
                flag =false;
                i=limit=Currmax;
                printf("%d %d \t%d %d\t %d \n ",i,j,Currmax,Prevmax,flag);
                break;
            }
        }
        if (flag)
        {
            Currmax++;
        }
        else
        {
            Prevmax = maxn(Currmax, Prevmax);
            Currmax = 0;
        }
    }
    return maxn(Prevmax, Currmax)+1;
}

int main()
{
    char str[] = "dvdf";
    printf("%d", lengthOfLongestSubstring(str));
    return 0;
}