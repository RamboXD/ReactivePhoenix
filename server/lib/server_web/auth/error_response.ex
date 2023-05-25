defmodule ServerWeb.Auth.ErrorResponse.Unauthorized do
  defexception [message: "Unautherized", plug_status: 401]
end
