#include <stdio.h>
#include <stdlib.h>
#include <zstack.h>

int main()
{

    n = 10; // size of stack initalized here but global varable
    int b, p, x = 1;
    printf("Initializing the stack with size 10\n\n");

    stack = (int *)calloc(n, sizeof(int));

    while (x)
    {
        printf("enter 1 for push\nenter 2 for pop\nenter 3 to display\nenter 4 to exit\n");
        int a;
        scanf("%d", &a);
        switch (a)
        {
        case 1:
            printf("Enter a value to push to stack\n");
            scanf("%d", &b);
            push(b);
            break;
        case 2:
            p = pop();
            if (p != -1)
            {
                printf("Popped %d from the stack\n", p);
            }
            break;
        case 3:
            display(10, stack);
            break;
        case 4:
            printf("\n\nexiting...\n");
            x = 0;
        }
    }

    return 0;
}
