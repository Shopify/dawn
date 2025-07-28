module Shared
  module Shell
    def self.clear_screen
      if RUBY_PLATFORM =~ /win32|win64|\.NET|windows|cygwin|mingw32/i
        system('cls')
      else
        system('clear')
      end
    end

    def self.run_command(command)
      require 'open3'
      require 'shellwords'
      out, err, status = Open3.capture3("bash -c #{Shellwords.escape(command)}")

      successful = status.success?
      $logger.debug("[Shared::Shell.run_command] Shell Command: #{command}")
      $logger.debug("[Shared::Shell.run_command] Status: #{status}")
      $logger.debug("[Shared::Shell.run_command] Standard Out: #{out}")
      $logger.debug("[Shared::Shell.run_command] Successful? #{successful}")
      $logger.error("[Shared::Shell.run_command] Unsuccessful Command! #{err}") unless successful
    end

    # rubocop:disable Naming/PredicateMethod
    def self.run_command_no_output(command)
      require 'open3'
      require 'shellwords'
      _out, _err, status = Open3.capture3("bash -c #{Shellwords.escape(command)}")
      status.success?
    end
    # rubocop:enable Naming/PredicateMethod

    def self.run_command_strout(command)
      require 'open3'
      require 'shellwords'
      out, err, status = Open3.capture3("bash -c #{Shellwords.escape(command)}")
      successful = status.success?
      $logger.debug("[Shared::Shell.run_command_strout] Shell Command: #{command}")
      $logger.debug("[Shared::Shell.run_command_strout] Status: #{status}")
      # $logger.debug("[Shared::Shell.run_command_strout] Standard Out: #{out}")
      $logger.debug("[Shared::Shell.run_command_strout] Successful? #{successful}")
      unless successful
        $logger.error('[Shared::Shell.run_command_strout] Unsuccessful Command!')
        $logger.error("[Shared::Shell.run_command_strout] Error Out: #{err}")
      end
      out
    end
  end
end
