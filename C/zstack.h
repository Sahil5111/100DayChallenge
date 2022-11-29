int n, top = -1, *stack;

void push(int x)
{
    if (top == n - 1)
    {
        printf("Stack overflow\n");
        return;
    }
    stack[++top] = x;
}

int pop()
{
    int a;
    if (top == -1)
    {
        printf("Stack underflow\n");
        return -1;
    }
    else
    {
        a = stack[top];
        stack[top] = 0;
        return a;
    }
}

int peek()
{
    if (top == -1)
        return -1;
    return stack[top];
}

/*    display function displays data in this format
 ____ ____ ____ ____ ____ ____ ____ ____ ____ ____
|    |    |    |    |    |    |    |    |    |    |
|  4 |  5 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 | <--- data is being pushed from this side
|____|____|____|____|____|____|____|____|____|____|
*/

void display(int a, int *stack)
{
    for (int i = 0; i < a; i++)
    {
        printf(" ____");
    }
    printf("\n");
    for (int i = 0; i < a; i++)
    {
        printf("|    ");
    }
    printf("|\n");
    for (int i = 0; i < a; i++)
    {
        printf("| %2d ", stack[i]);
    }
    printf("|\n");
    for (int i = 0; i < a; i++)
    {
        printf("|____");
    }
    printf("|\n\n");
}