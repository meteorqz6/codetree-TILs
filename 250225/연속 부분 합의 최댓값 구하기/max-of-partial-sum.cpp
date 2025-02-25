#include <iostream>
#include <climits>

using namespace std;

int n;
int arr[100000];
int dp[100000];

void Initialize() {
    for (int i = 0; i < n; i++) {
        dp[i] = INT_MIN;
    }
    dp[0] = arr[0];
}

int main() {
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    Initialize();
    for (int i = 1; i < n; i++) {
        dp[i] = max(dp[i-1] + arr[i], arr[i]);
    }
    int ans = INT_MIN;
    for (int i = 0;i<n;i++) {
        ans = max(ans, dp[i]);
    }
    cout << ans;
}
