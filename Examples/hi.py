def read_customer_data(filename):
    """Read and return data from filename as a list of lists (name, state, debt)"""
    names = []
    states = []
    debts = []

    with open(filename) as f:
        rows = f.readlines()
    for row in rows:
        row = row.split(',')
        names.append(row[0])
        states.append(row[1])
        debts.append(float(row[2].strip()))
    return names, states, debts

def identify_customer(names, states, debts, high_debt, name_prefix, state_abbr):
    max_debt_index = debts.index(max(debts))  # Find index of the highest debt
    highest_debt_customer = names[max_debt_index]

    num_start_with_prefix = sum(1 for name in names if name.startswith(name_prefix))
    num_debt_over_limit = sum(1 for debt in debts if debt > high_debt)
    num_debt_free = sum(1 for debt in debts if debt == 0)
    specific_state_count = states.count(state_abbr)

    return highest_debt_customer, num_start_with_prefix, num_debt_over_limit, num_debt_free, specific_state_count

if __name__ == '__main__':
    # number of rows to consider
    num_customers = int(input())
    high_debt = int(input())
    name_pre = input()
    state = input()

    names, states, debts = read_customer_data("CustomerData.csv")

    # Type your code here.
    highest_debt_customer, num_start_with_prefix, num_debt_over_limit, num_debt_free, specific_state_count = identify_customer(names, states, debts, high_debt, name_pre, state)

    num_names_start_with_prefix = 0
    for name in names:
        if name.startswith(name_pre):
            num_names_start_with_prefix += 1

    print("U.S. Report")
    print("Customers:", num_customers)
    print("Highest debt:", highest_debt_customer)
    print(f"Customer names that start with {name_pre}: {num_start_with_prefix}")
    print(f"Customers with debt over {high_debt}: {num_debt_over_limit}")
    print(f"Customers debt free: {num_debt_free}")
    print(f"Customers in {state}: {specific_state_count}")
    print(f"Number of customer names that start with {name_pre}: {num_names_start_with_prefix}")