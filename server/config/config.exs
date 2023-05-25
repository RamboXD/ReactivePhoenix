# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :server,
  ecto_repos: [Server.Repo],
  generators: [binary_id: true]

# Configures the endpoint
config :server, ServerWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [
    formats: [json: ServerWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: Server.PubSub,
  live_view: [signing_salt: "iQdWRRdk"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :server, ServerWeb.Auth.Guardian,
  issuer: "server",
  secret_key: "CFFAgNW4GexqTrHbV4PVKbOee0wOXTHBC4jCoyIdrY1/k01sUhpiPdu+gOOUPc+Y"

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
