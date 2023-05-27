#include <stdio.h>
#include <stdlib.h>

int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{
    for (int i = 0; i < numsSize; i++)
    {
        for (int j = i + 1; j < numsSize; j++)
        {
            if (nums[i] + nums[j] == target)
            {
                int *arr = (int *)malloc(2 * sizeof(int));
                *returnSize = 2;
                arr[0] = i;
                arr[1] = j;
                return arr;
            }
        }
    }
    return NULL;
}

int main()
{
    int *pointer;
    int size = 4;
    int *outsize;
    int *arr = (int *)malloc(size * (sizeof(int)));
    arr[0] = 2;
    arr[1] = 7;
    arr[2] = 11;
    arr[3] = 15;
    *outsize = -1;
    pointer = twoSum(arr, size, 9, outsize);
    printf("[%d,%d]", pointer[0], pointer[1]);
    return 0;
}