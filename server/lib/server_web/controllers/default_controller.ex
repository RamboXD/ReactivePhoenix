defmodule ServerWeb.DefaultController do
  use ServerWeb, :controller

  def index(conn, _params) do
    text conn, "Batya v dele - #{Mix.env()}"
  end
end
