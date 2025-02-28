# Base image
FROM openjdk:17-jdk-slim

# Add any necessary dependencies or tools
RUN apt-get update && apt-get install -y \
    curl \
    vim \
    && apt-get clean

# Set environment variables (optional)
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk
ENV PATH="$JAVA_HOME/bin:$PATH"

# Create a working directory
WORKDIR /usr/jdk-custom

# Add a placeholder for any extra customizations here
# Example: copy any additional scripts or files if needed
# COPY some-custom-file.sh /usr/jdk-custom/

# Default command (if required for testing or diagnostics)
CMD ["java", "-version"]
