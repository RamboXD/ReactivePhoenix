defmodule ServerWeb.AccountJSON do
  alias Server.Accounts.Account

  @doc """
  Renders a list of accounts.
  """
  def index(%{accounts: accounts}) do
    %{data: for(account <- accounts, do: data(account))}
  end

  @doc """
  Renders a single account.
  """
  def show(%{account: account}) do
    %{data: data(account)}
  end

  defp data(%Account{} = account) do
    %{
      id: account.id,
      email: account.email,
      hash_password: account.hash_password
    }
  end

  def account_token(%{account: account, token: token}) do
    %{
      user: %{
        email: account.email,
        id: account.id
      },
      token: token
    }
  end
end
