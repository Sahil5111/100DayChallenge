#include <stdio.h>
#include <stdlib.h>

struct ListNode
{
    int val;
    struct ListNode *next;
};

int carrygen(int a)
{
    return (a / 10) % 10;
}

struct ListNode *addTwoNumbers(struct ListNode *l1, struct ListNode *l2)
{
    struct ListNode *head1 = l1;
    struct ListNode *head2 = l2;
    struct ListNode *result = (struct ListNode *)(malloc(sizeof(struct ListNode)));
    result->next = NULL;
    struct ListNode *rt = result;
    int carry = 0;
    while (head1 != NULL || head2 != NULL)
    {
        if (head1 == NULL)
        {
            rt->val = (carry + head2->val) % 10;
            carry = carrygen(carry + head2->val);
            head2 = head2->next;
        }
        else if (head2 == NULL)
        {
            rt->val = (carry + head1->val) % 10;
            carry = carrygen(carry + head1->val);
            head1 = head1->next;
        }
        else
        {
            rt->val = (carry + head1->val + head2->val) % 10;
            carry = carrygen(carry + head1->val + head2->val);
            head1 = head1->next;
            head2 = head2->next;
        }
        if (head1 != NULL || head2 != NULL && rt->next == NULL)
        {
            struct ListNode *temp = (struct ListNode *)(malloc(sizeof(struct ListNode)));
            temp->next = NULL;
            rt->next = temp;
            rt = rt->next;
        }
    }
    if (carry)
    {
        struct ListNode *temp = (struct ListNode *)(malloc(sizeof(struct ListNode)));
        temp->val = carry;
        temp->next = NULL;
        rt->next = temp;
    }
    return result;
}

int main()
{
    struct ListNode *l1 = NULL;  // 9 9 9 9 9 9 9 
    struct ListNode *tail = NULL;

    for (int i = 0; i < 7; i++)
    {
        struct ListNode *newNode = (struct ListNode *)malloc(sizeof(struct ListNode));
        newNode->val = 9;
        newNode->next = NULL;

        if (l1 == NULL)
        {
            l1 = newNode;
            tail = newNode;
        }
        else
        {
            tail->next = newNode;
            tail = newNode;
        }
    }
    struct ListNode *head = NULL;  // 9 9 9 9 
    struct ListNode *t2 = NULL;

    for (int i = 0; i < 4; i++)
    {
        struct ListNode *newNode = (struct ListNode *)malloc(sizeof(struct ListNode));
        newNode->val = 9;
        newNode->next = NULL;

        if (head == NULL)
        {
            head = newNode;
            t2 = newNode;
        }
        else
        {
            t2->next = newNode;
            t2 = newNode;
        }
    }

    struct ListNode *result = addTwoNumbers(l1, head);
    while (result != NULL)
    {
        printf("%d ", result->val);   // 8 9 9 9 0 0 0 1
        result = result->next;
    }
    return 0;
}