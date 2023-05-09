# coding=utf-8
# Endpoints class.

from azure.servicebus.aio import ServiceBusClient
from azure.servicebus import ServiceBusMessage
import os
import json


class AzureBus:
    async def send_message(self, first_name, last_name, email):
        try:
            conn_str = os.environ['AZ_BUS_CONNECTION_STRING']
            queue_name = os.environ['AZ_BUS_QUEUE_NAME']
        except KeyError:
            raise Exception("No connection string or queue name found for Service Bus")

        async with ServiceBusClient.from_connection_string(
            conn_str=conn_str,
            logging_enable=True) as servicebus_client:
        
            sender = servicebus_client.get_queue_sender(queue_name=queue_name)

            async with sender:
                message = ServiceBusMessage(json.dumps({ 'first_name': first_name, 'last_name': last_name, 'email': email }))
                await sender.send_messages(message)
