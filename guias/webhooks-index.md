# 🔔 Webhooks disponíveis (por recurso)

Clique em um evento para abrir a página do recurso correspondente, já na seção do webhook.

#### Contas Contábeis

- <a href="./html-files/accountancy-accounts-v1.html#operations-webhooks-postwebhookAccountancyAccountUpdated" target="content">ACCOUNTANCY_ACCOUNT_UPDATED</a> — Webhook de conta contábil atualizada
- <a href="./html-files/accountancy-accounts-v1.html#operations-webhooks-postwebhookAccountancyAccountCreated" target="content">ACCOUNTANCY_ACCOUNT_CREATED</a> — Webhook de conta contábil criada
- <a href="./html-files/accountancy-accounts-v1.html#operations-webhooks-postwebhookAccountancyAccountDeleted" target="content">ACCOUNTANCY_ACCOUNT_DELETED</a> — Webhook de conta contábil deletada

JSON enviado na notificação para os eventos acima:

    { "companyId": int, "accountId": int }

#### Fechamento Contábil (Contabilidade)

- <a href="./html-files/accountancy-closingaccountancy-v1.html#operations-webhooks-postwebhookAccountancyClosingCreated" target="content">ACCOUNTANCY_CLOSING_CREATED</a> — Webhook de fechamento contábil criado

JSON enviado na notificação:

    { "companyId": int, "closingAt": string }

#### Títulos do Contas a Receber

- <a href="./html-files/accounts-receivable-v1.html#operations-webhooks-postwebhookReceivableInstallmentCreated" target="content">RECEIVABLE_INSTALLMENT_CREATED</a> — Webhook de parcela criada no contas a receber
- <a href="./html-files/accounts-receivable-v1.html#operations-webhooks-postwebhookReceivableInstallmentUpdated" target="content">RECEIVABLE_INSTALLMENT_UPDATED</a> — Webhook de parcela atualizada no contas a receber
- <a href="./html-files/accounts-receivable-v1.html#operations-webhooks-postwebhookReceivableInstallmentRemoved" target="content">RECEIVABLE_INSTALLMENT_REMOVED</a> — Webhook de parcela removida no contas a receber

JSON enviado na notificação para os eventos acima:

    { "receivableBillId": int, "installmentId": int }

- <a href="./html-files/accounts-receivable-v1.html#operations-webhooks-postwebhookAssignmentRightsAgreementUpdated" target="content">ASSIGNMENT_RIGHTS_AGREEMENT_UPDATED</a> — Webhook de cessão de direito atualizada

JSON enviado na notificação:

    { "receivableBillId": int, "dtRightAssignment": date, "customersIdBefore": [integer], "customersIdAfter": [integer] }

- <a href="./html-files/accounts-receivable-v1.html#operations-webhooks-postwebhookUpdateReceivableBillSituation" target="content">UPDATE_RECEIVABLE_BILL_SITUATION</a> — Webhook de alteração de situação do título

JSON enviado na notificação:

    { "receivableBillId": [integer], "situation": string }

- <a href="./html-files/accounts-receivable-v1.html#operations-webhooks-postwebhookReceiptProcessed" target="content">RECEIPT_PROCESSED</a> — Webhook de baixa/recebimento processado

JSON enviado na notificação:

    { "billId": int, "installmentId": int }

- <a href="./html-files/accounts-receivable-v1.html#operations-webhooks-postwebhookKeysHandoverCreated" target="content">KEYS_HANDOVER_CREATED</a> — Webhook de entrega de chaves criada
- <a href="./html-files/accounts-receivable-v1.html#operations-webhooks-postwebhookKeysHandoverExcluded" target="content">KEYS_HANDOVER_EXCLUDED</a> — Webhook de entrega de chaves excluída

JSON enviado na notificação para os eventos acima:

    { "titleNumber": int, "customerId": int, "contractNumber": string, "dtKeysHandover": date }

#### Títulos do Contas a Pagar

- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentBillUpdated" target="content">PAYMENT_BILL_UPDATED</a> — Webhook de título alterado no contas a pagar
- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentAcknowledgmentPending" target="content">PAYMENT_ACKNOWLEDGMENT_PENDING</a> — Webhook de título a pagar com a ciência pendente
- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentAcknowledgmentProcessed" target="content">PAYMENT_ACKNOWLEDGMENT_PROCESSED</a> — Webhook de título a pagar quando a ciência for realizada

JSON enviado na notificação para os eventos acima:

    { "billId": int }

- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentInstallmentCreated" target="content">PAYMENT_INSTALLMENT_CREATED</a> — Webhook de parcela criada no contas a pagar
- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentInstallmentUpdated" target="content">PAYMENT_INSTALLMENT_UPDATED</a> — Webhook de parcela alterada no contas a pagar
- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentInstallmentRemoved" target="content">PAYMENT_INSTALLMENT_REMOVED</a> — Webhook de parcela removida no contas a pagar
- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentReceiptProcessed" target="content">PAYMENT_RECEIPT_PROCESSED</a> — Webhook de baixa processada no contas a pagar
- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentReceiptUpdated" target="content">PAYMENT_RECEIPT_UPDATED</a> — Webhook de baixa alterada no contas a pagar
- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentReceiptRemoved" target="content">PAYMENT_RECEIPT_REMOVED</a> — Webhook de baixa cancelada no contas a pagar

JSON enviado na notificação para os eventos acima:

    { "billId": int, "installmentId": int, "billOrigin": string, "documentType": string }

- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentAuthorizationAvailable" target="content">PAYMENT_AUTHORIZATION_AVAILABLE</a> — Webhook de autorização disponível no contas a pagar

JSON enviado na notificação:

    { "billId": int, "installmentId": int, "authorized": boolean }

- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentAuthorizationUpdate" target="content">PAYMENT_AUTHORIZATION_UPDATE</a> — Webhook de autorização atualizada no contas a pagar

JSON enviado na notificação:

    { "billId": int, "installmentId": int, "billOrigin": string, "documentType": string, "authorized": string }

- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentReceiptChargebackProcessed" target="content">PAYMENT_RECEIPT_CHARGEBACK_PROCESSED</a> — Webhook de estorno da baixa processado no contas a pagar
- <a href="./html-files/bill-debt-v1.html#operations-webhooks-postwebhookPaymentReceiptChargebackRemoved" target="content">PAYMENT_RECEIPT_CHARGEBACK_REMOVED</a> — Webhook de estorno da baixa cancelado no contas a pagar

JSON enviado na notificação para os eventos acima:

    { "billId": int, "installmentId": int }

#### Orçamentos de Obra

- <a href="./html-files/building-cost-estimations-v1.html#operations-webhooks-postwebhookBuildingCostEstimationsVersionCreated" target="content">BUILDING_COST_ESTIMATIONS_VERSION_CREATED</a> — Webhook de nova versão de orçamento criada

JSON enviado na notificação:

    { "buildingId": int, "buildingStatus": string, "creationDate": datetime, "versionNumber": int }

- <a href="./html-files/building-cost-estimations-v1.html#operations-webhooks-postwebhookBuildingCostEstimationUpdated" target="content">BUILDING_COST_ESTIMATION_UPDATED</a> — Webhook de item de orçamento criado ou removido

JSON enviado na notificação:

    { "buildingId": int, "buildingUnitId": int, "updatedAt": datetime, "user": string }

#### Bulk-data Caixas e Bancos

- <a href="./html-files/bulk-data-caixas-e-bancos.html#operations-webhooks-postwebhookBankMovementCreated" target="content">BANK_MOVEMENT_CREATED</a> — Webhook de movimento bancário criado
- <a href="./html-files/bulk-data-caixas-e-bancos.html#operations-webhooks-postwebhookBankMovementUpdated" target="content">BANK_MOVEMENT_UPDATED</a> — Webhook de movimento bancário atualizado
- <a href="./html-files/bulk-data-caixas-e-bancos.html#operations-webhooks-postwebhookBankMovementDeleted" target="content">BANK_MOVEMENT_DELETED</a> — Webhook de movimento bancário excluído

JSON enviado na notificação para os eventos acima:

    { "bankMovementId": int }

#### Histórico de Notificação de Cobranças

- <a href="./html-files/collections-notification-history-v1.html#operations-webhooks-postcollectionNotifiedWebhook" target="content">COLLECTION_NOTIFIED</a> — Notificação de cobrança gerada

JSON enviado na notificação:

    { "collectionHistoryId": int }

#### Comissões

- <a href="./html-files/commissions-v1.html#operations-webhooks-postsalesCommissionCreatedWebhook" target="content">SALES_COMMISSION_CREATED</a> — Comissão de vendas criada

JSON enviado na notificação:

    { "commissionId": int, "commissionsBillId": [integer] }

- <a href="./html-files/commissions-v1.html#operations-webhooks-postsalesCommissionInstallmentsAuthorizedWebhook" target="content">SALES_COMMISSION_INSTALLMENTS_AUTHORIZED</a> — Parcela de comissão autorizada

JSON enviado na notificação:

    { "commissionId": int, "authorize": boolean, "installmentsNumber": [integer] }

- <a href="./html-files/commissions-v1.html#operations-webhooks-postsalesCommissionInstallmentsCanceledWebhook" target="content">SALES_COMMISSION_INSTALLMENTS_CANCELED</a> — Parcela de comissão cancelada

JSON enviado na notificação:

    { "commissionId": int, "cancel": boolean, "installmentsNumber": [integer] }

- <a href="./html-files/commissions-v1.html#operations-webhooks-postsalesCommissionInstallmentsReleasedWebhook" target="content">SALES_COMMISSION_INSTALLMENTS_RELEASED</a> — Parcela de comissão liberada

JSON enviado na notificação:

    { "commissionId": int, "commissionBillId": int, "installmentsNumber": [integer], "comissionReleasedId": int, "comissionReleasedBillId": int }

- <a href="./html-files/commissions-v1.html#operations-webhooks-postsalesCommissionReleasesExcludedWebhook" target="content">SALES_COMMISSION_RELEASES_EXCLUDED</a> — Liberação de comissão excluída

JSON enviado na notificação:

    { "commissionId": int, "commissionBillId": int, "installmentNumber": int, "comissionExcludedId": int, "comissionExcludedBillId": int }

- <a href="./html-files/commissions-v1.html#operations-webhooks-postsalesCommissionExcludedWebhook" target="content">SALES_COMMISSION_EXCLUDED</a> — Comissão de vendas excluída

JSON enviado na notificação:

    { "commissionId": int, "commissionBillId": int }

#### Diário de Obra

- <a href="./html-files/construction-daily-report-v1.html#operations-webhooks-postconstructionDailyReportTypeCreated" target="content">CONSTRUCTION_DAILY_REPORT_TYPE_CREATED</a> — Tipo de diário de obra criado
- <a href="./html-files/construction-daily-report-v1.html#operations-webhooks-postconstructionDailyReportTypeUpdated" target="content">CONSTRUCTION_DAILY_REPORT_TYPE_UPDATED</a> — Tipo de diário de obra atualizado
- <a href="./html-files/construction-daily-report-v1.html#operations-webhooks-postconstructionDailyReportTypeDeleted" target="content">CONSTRUCTION_DAILY_REPORT_TYPE_DELETED</a> — Tipo de diário de obra excluído

JSON enviado na notificação para os eventos acima:

    { "constructionDailyReportTypeId": int }

#### Contratos de Suprimentos

- <a href="./html-files/contracts-v1.html#operations-webhooks-postwebhookContractAuthorized" target="content">CONTRACT_AUTHORIZED</a> — Webhook de contrato autorizado

JSON enviado na notificação:

    { "documentId": string, "contractNumber": string, "consistent": boolean }

- <a href="./html-files/contracts-v1.html#operations-webhooks-postwebhookContractUnauthorized" target="content">CONTRACT_UNAUTHORIZED</a> — Webhook de contrato desautorizado

JSON enviado na notificação:

    { "documentId": string, "contractNumber": string, "consistent": boolean, "disapproved": boolean }

#### Tabelas do Custos Unitários

- <a href="./html-files/cost-databases-v1.html#operations-webhooks-postwebhookResourceCreated" target="content">RESOURCE_CREATED</a> — Webhook de insumo criado

JSON enviado na notificação:

    { "costDatabaseId": int, "id": int, "resourceCode": string, "createdAt": datetime }

- <a href="./html-files/cost-databases-v1.html#operations-webhooks-postwebhookWorkItemCreated" target="content">WORKITEM_CREATED</a> — Webhook de serviço criado

JSON enviado na notificação:

    { "costDatabaseId": int, "id": int, "auxiliaryCode": string, "buildingTypeId": string, "createdAt": datetime }

#### Credores

- <a href="./html-files/creditor-v1.html#operations-webhooks-postcreditorCreatedWebhook" target="content">CREDITORS_CREATED</a> — Webhook disparado quando um credor é criado
- <a href="./html-files/creditor-v1.html#operations-webhooks-postcreditorUpdatedWebhook" target="content">CREDITORS_UPDATED</a> — Webhook disparado quando um credor é atualizado
- <a href="./html-files/creditor-v1.html#operations-webhooks-postcreditorRemovedWebhook" target="content">CREDITORS_REMOVED</a> — Webhook disparado quando um credor é removido
- <a href="./html-files/creditor-v1.html#operations-webhooks-postcreditorDisabledWebhook" target="content">CREDITORS_DISABLED</a> — Webhook disparado quando um credor é desativado
- <a href="./html-files/creditor-v1.html#operations-webhooks-postcreditorEnabledWebhook" target="content">CREDITORS_ENABLED</a> — Webhook disparado quando um credor é ativado

JSON enviado na notificação para os eventos acima:

    { "creditorId": int, "typesId": string }

#### Clientes

- <a href="./html-files/customers-v1.html#operations-webhooks-postcustomerCreatedWebhook" target="content">CUSTOMER_CREATED</a> — Webhook disparado quando um cliente é criado
- <a href="./html-files/customers-v1.html#operations-webhooks-postcustomerUpdatedWebhook" target="content">CUSTOMER_UPDATED</a> — Webhook disparado quando um cliente é atualizado
- <a href="./html-files/customers-v1.html#operations-webhooks-postcustomerRemovedWebhook" target="content">CUSTOMER_REMOVED</a> — Webhook disparado quando um cliente é removido
- <a href="./html-files/customers-v1.html#operations-webhooks-postcustomerDisabledWebhook" target="content">CUSTOMER_DISABLED</a> — Webhook disparado quando um cliente é desativado
- <a href="./html-files/customers-v1.html#operations-webhooks-postcustomerEnabledWebhook" target="content">CUSTOMER_ENABLED</a> — Webhook disparado quando um cliente é ativado

JSON enviado na notificação para os eventos acima:

    { "customerId": int }

#### Empreendimentos (Obras)

- <a href="./html-files/enterprise-v1.html#operations-webhooks-postwebhookCostCenterCreated" target="content">COST_CENTER_CREATED</a> — Webhook de centro de custo criado
- <a href="./html-files/enterprise-v1.html#operations-webhooks-postwebhookCostCenterUpdated" target="content">COST_CENTER_UPDATED</a> — Webhook de centro de custo atualizado
- <a href="./html-files/enterprise-v1.html#operations-webhooks-postwebhookCostCenterRemoved" target="content">COST_CENTER_REMOVED</a> — Webhook de centro de custo removido

JSON enviado na notificação para os eventos acima:

    { "costCenterId": int }

- <a href="./html-files/enterprise-v1.html#operations-webhooks-postwebhookEnterpriseIdUpdated" target="content">ENTERPRISE_ID_UPDATED</a> — Webhook de código do empreendimento alterado

JSON enviado na notificação:

    { "previousEnterpriseId": int, "currentEnterpriseId": int, "updatedAt": datetime, "user": string }

- <a href="./html-files/enterprise-v1.html#operations-webhooks-postwebhookBuildingStatusUpdated" target="content">BUILDING_STATUS_UPDATED</a> — Webhook de situação da obra alterada
- <a href="./html-files/enterprise-v1.html#operations-webhooks-postwebhookBuildingCostEstimationStatusUpdated" target="content">BUILDING_COST_ESTIMATION_STATUS_UPDATED</a> — Webhook de situação do orçamento alterada

JSON enviado na notificação para os eventos acima:

    { "buildingId": int, "updatedAt": datetime }

#### Medições de Contratos de Suprimentos

- <a href="./html-files/measurement-v1.html#operations-webhooks-postwebhookMeasurementAuthorized" target="content">MEASUREMENT_AUTHORIZED</a> — Webhook de medição autorizada
- <a href="./html-files/measurement-v1.html#operations-webhooks-postwebhookMeasurementUnauthorized" target="content">MEASUREMENT_UNAUTHORIZED</a> — Webhook de medição desautorizada
- <a href="./html-files/measurement-v1.html#operations-webhooks-postwebhookClearingFinished" target="content">CLEARING_FINISHED</a> — Webhook de liberação de medição finalizada
- <a href="./html-files/measurement-v1.html#operations-webhooks-postwebhookClearingDeleted" target="content">CLEARING_DELETED</a> — Webhook de liberação de medição deletada

JSON enviado na notificação para os eventos acima:

    { "documentId": string, "contractNumber": string, "measurementNumber": int, "buildingId": int }

#### Locação de Imóveis

- <a href="./html-files/property-rental-v1.html#operations-webhooks-postpropertyRentalCreatedWebhook" target="content">PROPERTY_RENTAL_CREATED</a> — Contrato de locação criado

JSON enviado na notificação:

    { "contractSeqId": int, "unitId": int }

- <a href="./html-files/property-rental-v1.html#operations-webhooks-postpropertyRentalUpdatedWebhook" target="content">PROPERTY_RENTAL_UPDATED</a> — Contrato de locação atualizado
- <a href="./html-files/property-rental-v1.html#operations-webhooks-postpropertyRentalExcludedWebhook" target="content">PROPERTY_RENTAL_EXCLUDED</a> — Contrato de locação excluído
- <a href="./html-files/property-rental-v1.html#operations-webhooks-postpropertyRentalCancelledWebhook" target="content">PROPERTY_RENTAL_CANCELLED</a> — Contrato de locação cancelado
- <a href="./html-files/property-rental-v1.html#operations-webhooks-postpropertyRentalTerminatedWebhook" target="content">PROPERTY_RENTAL_TERMINATED</a> — Contrato de locação finalizado

JSON enviado na notificação para os eventos acima:

    { "contractSeqId": int }

- <a href="./html-files/property-rental-v1.html#operations-webhooks-postpropertyRentalIssuedWebhook" target="content">PROPERTY_RENTAL_ISSUED</a> — Contrato de locação emitido
- <a href="./html-files/property-rental-v1.html#operations-webhooks-postpropertyRentalReactivatedWebhook" target="content">PROPERTY_RENTAL_REACTIVATED</a> — Contrato de locação reativado
- <a href="./html-files/property-rental-v1.html#operations-webhooks-postpropertyRentalTerminationExcludedWebhook" target="content">PROPERTY_RENTAL_TERMINATION_EXCLUDED</a> — Finalização de contrato excluída

JSON enviado na notificação para os eventos acima:

    { "contractSeqId": int, "billId": int }

#### Pedidos de Compra

- <a href="./html-files/purchase-orders-v1.html#operations-webhooks-postpurchaseOrderAuthorizationChanged" target="content">PURCHASE_ORDER_AUTHORIZATION_CHANGED</a> — Autorização do pedido alterada

JSON enviado na notificação:

    { "purchaseOrderId": int, "authorized": boolean, "consistent": boolean, "changedAt": datetime }

- <a href="./html-files/purchase-orders-v1.html#operations-webhooks-postpurchaseOrderGeneratedFromNegotiation" target="content">PURCHASE_ORDER_GENERATED_FROM_NEGOCIATION</a> — Pedido gerado via negociação

JSON enviado na notificação:

    { "purchaseOrderId": int, "purchaseQuotationId": int, "supplierId": int, "negotiationNumber": int, "authorized": boolean }

- <a href="./html-files/purchase-orders-v1.html#operations-webhooks-postpurchaseOrderItemModified" target="content">PURCHASE_ORDER_ITEM_MODIFIED</a> — Itens do pedido modificados
- <a href="./html-files/purchase-orders-v1.html#operations-webhooks-postpurchaseOrderFinancialForecastUpdated" target="content">PURCHASE_ORDER_FINANCIAL_FORECAST_UPDATED</a> — Previsão financeira atualizada

JSON enviado na notificação para os eventos acima:

    { "purchaseOrderId": int }

#### Cotações de Preços

- <a href="./html-files/purchase-quotations-v1.html#operations-webhooks-postpurchaseQuotationNegotiationAuthorizationChanged" target="content">PURCHASE_QUOTATION_NEGOTIATION_AUTHORIZATION_CHANGED</a> — Autorização da negociação alterada

JSON enviado na notificação:

    { "purchaseQuotationId": int, "supplierId": int, "negotiationId": int, "authorized": boolean, "consistent": boolean, "changedAt": datetime }

#### Solicitações de Compra

- <a href="./html-files/solicitacoes-de-compra.html#operations-webhooks-postpurchaseRequestItemAuthorizationUpdate" target="content">PURCHASE_REQUEST_ITEM_AUTHORIZATION_UPDATE</a> — Atualização de autorização do item da solicitação

JSON enviado na notificação:

    { "purchaseRequestId": int, "purchaseRequestItemNumber": int, "authorized": boolean, "disapproved": boolean }

- <a href="./html-files/solicitacoes-de-compra.html#operations-webhooks-postpurchaseRequestItemCreated" target="content">PURCHASE_REQUEST_ITEM_CREATED</a> — Item da solicitação criado
- <a href="./html-files/solicitacoes-de-compra.html#operations-webhooks-postpurchaseRequestItemUpdated" target="content">PURCHASE_REQUEST_ITEM_UPDATED</a> — Item da solicitação atualizado
- <a href="./html-files/solicitacoes-de-compra.html#operations-webhooks-postpurchaseRequestItemDeleted" target="content">PURCHASE_REQUEST_ITEM_DELETED</a> — Item da solicitação removido

JSON enviado na notificação para os eventos acima:

    { "purchaseRequestId": int, "purchaseRequestItemNumber": int }

- <a href="./html-files/solicitacoes-de-compra.html#operations-webhooks-postpurchaseRequestDeleted" target="content">PURCHASE_REQUEST_DELETED</a> — Solicitação de compra removida
- <a href="./html-files/solicitacoes-de-compra.html#operations-webhooks-postpurchaseRequestUpdated" target="content">PURCHASE_REQUEST_UPDATED</a> — Solicitação de compra atualizada

JSON enviado na notificação para os eventos acima:

    { "purchaseRequestId": int }

#### Contratos de Vendas

- <a href="./html-files/sales-contracts-v1.html#operations-webhooks-postsalesContractCreatedWebhook" target="content">SALES_CONTRACT_CREATED</a> — Contrato de venda criado
- <a href="./html-files/sales-contracts-v1.html#operations-webhooks-postsalesContractUpdatedWebhook" target="content">SALES_CONTRACT_UPDATED</a> — Contrato de venda atualizado
- <a href="./html-files/sales-contracts-v1.html#operations-webhooks-postsalesContractRemovedWebhook" target="content">SALES_CONTRACT_REMOVED</a> — Contrato de venda removido
- <a href="./html-files/sales-contracts-v1.html#operations-webhooks-postsalesContractIssuedWebhook" target="content">SALES_CONTRACT_ISSUED</a> — Contrato de venda emitido
- <a href="./html-files/sales-contracts-v1.html#operations-webhooks-postsalesContractCanceledWebhook" target="content">SALES_CONTRACT_CANCELED</a> — Contrato de venda cancelado

JSON enviado na notificação para os eventos acima:

    { "salesContractId": int }

#### Estoque de Insumos

- <a href="./html-files/stock-inventories-v1.html#operations-webhooks-postinventoryMovementCreated" target="content">INVENTORY_MOVEMENT_CREATED</a> — Notificação de movimentação de estoque criada
- <a href="./html-files/stock-inventories-v1.html#operations-webhooks-postinventoryMovementUpdated" target="content">INVENTORY_MOVEMENT_UPDATED</a> — Notificação de movimentação de estoque atualizada
- <a href="./html-files/stock-inventories-v1.html#operations-webhooks-postinventoryMovementDeleted" target="content">INVENTORY_MOVEMENT_DELETED</a> — Notificação de movimentação de estoque deletada

JSON enviado na notificação para os eventos acima:

    { "inventoryMovementId": int }

#### Unidades de Imóveis

- <a href="./html-files/unit-v1.html#operations-webhooks-postunitCreatedWebhook" target="content">UNIT_CREATED</a> — Nova unidade criada
- <a href="./html-files/unit-v1.html#operations-webhooks-postunitUpdatedWebhook" target="content">UNIT_UPDATED</a> — Unidade atualizada
- <a href="./html-files/unit-v1.html#operations-webhooks-postunitRemovedWebhook" target="content">UNIT_REMOVED</a> — Unidade removida

JSON enviado na notificação para os eventos acima:

    { "unitId": int }

#### Gerenciamento de Cobrança

- <a href="./html-files/gerenciamento-de-cobranca.html#operations-webhooks-postbookCollectionConfirmedWebhook" target="content">BOOK_COLLECTION_CONFIRMED</a> — Cobrança escritural confirmada

JSON enviado na notificação:

    { "billId": int, "installmentId": int, "banknumber": string }

#### Registro de Boletos

- <a href="./html-files/registro-de-boletos.html#operations-webhooks-postpaymentSlipRegisteredWebhook" target="content">PAYMENT_SLIP_REGISTERED</a> — Registro de boleto processado

JSON enviado na notificação:

    { "receivableBillId": int, "installmentId": int, "accountNumber": string, "status": string }

#### Assistência Técnica

- <a href="./html-files/assistencia-tecnica.html#operations-webhooks-postwebhookTechnicalAssistanceAnalysis" target="content">TECHNICAL_ASSISTANCE_ANALYSIS</a> — Webhook de assistência técnica em análise
- <a href="./html-files/assistencia-tecnica.html#operations-webhooks-postwebhookTechnicalAssistanceCanceled" target="content">TECHNICAL_ASSISTANCE_CANCELED</a> — Webhook de assistência técnica cancelada
- <a href="./html-files/assistencia-tecnica.html#operations-webhooks-postwebhookTechnicalAssistanceClosed" target="content">TECHNICAL_ASSISTANCE_CLOSED</a> — Webhook de assistência técnica encerrada
- <a href="./html-files/assistencia-tecnica.html#operations-webhooks-postwebhookTechnicalAssistanceCreated" target="content">TECHNICAL_ASSISTANCE_CREATED</a> — Webhook de assistência técnica criada
- <a href="./html-files/assistencia-tecnica.html#operations-webhooks-postwebhookTechnicalAssistanceExcluded" target="content">TECHNICAL_ASSISTANCE_EXCLUDED</a> — Webhook de assistência técnica excluída

JSON enviado na notificação para os eventos acima:

    { "enterpriseId": int, "unitId": int, "solicitationId": int }

- <a href="./html-files/assistencia-tecnica.html#operations-webhooks-postwebhookServiceOrderCreated" target="content">SERVICE_ORDER_CREATED</a> — Webhook de ordem de serviço criada
- <a href="./html-files/assistencia-tecnica.html#operations-webhooks-postwebhookServiceOrderRemoved" target="content">SERVICE_ORDER_REMOVED</a> — Webhook de ordem de serviço removida
- <a href="./html-files/assistencia-tecnica.html#operations-webhooks-postwebhookServiceOrderUpdated" target="content">SERVICE_ORDER_UPDATED</a> — Webhook de ordem de serviço atualizada

JSON enviado na notificação para os eventos acima:

    { "enterpriseId": int, "unitId": int, "solicitationId": int, "serviceOrderId": int }


[Fonte oficial](https://api.sienge.com.br/v1/docs/webhooks-index.html)
