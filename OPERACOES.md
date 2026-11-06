# Operações e webhooks

Os grupos seguem as especificações oficiais. Cada módulo traz o link para os parâmetros, esquemas e exemplos.


## Empreendimentos (Obras)

[Especificação oficial](oficial/yaml-files/enterprise-v1.yaml)

- **GET** `/enterprises/{enterpriseId}` — Busca o empreendimento no Sienge
- **GET** `/enterprises` — Busca uma lista de empreendimentos
- **GET** `/enterprises/{enterpriseId}/groupings` — Busca valores dos agrupamentos no Sienge
- **Webhook** `COST_CENTER_CREATED` — Webhook de centro de custo criado
- **Webhook** `COST_CENTER_UPDATED` — Webhook de centro de custo atualizado
- **Webhook** `COST_CENTER_REMOVED` — Webhook de centro de custo removido
- **Webhook** `ENTERPRISE_ID_UPDATED` — Webhook de código do empreendimento alterado
- **Webhook** `BUILDING_STATUS_UPDATED` — Webhook de situação da obra alterada
- **Webhook** `BUILDING_COST_ESTIMATION_STATUS_UPDATED` — Webhook de situação do orçamento alterada

## Planejamentos de Obra

[Especificação oficial](oficial/yaml-files/building-projects-v1.yaml)

- **GET** `/building-projects/{buildingId}/sheets/{buildingUnitId}/tasks` — Retorna tarefas da planilha atual do planejamento da obra
- **PUT** `/building-projects/{buildingId}/sheets/{buildingUnitId}/tasks` — Insere tarefas na planilha de planejamento da obra

## Acompanhamentos de Obra

[Especificação oficial](oficial/yaml-files/building-projects-progress-logs-v1.yaml)

- **POST** `/building-projects/{buildingId}/progress-logs` — Atualiza percentual de avanço físico das Tarefas.
- **GET** `/building-projects/progress-logs` — Consulta progressos do Planejamento de Obras.
- **GET** `/building-projects/{buildingId}/progress-logs/{measurementNumber}` — Consulta o progresso do Planejamento de uma Obra.
- **GET** `/building-projects/{buildingId}/progress-logs/{measurementNumber}/items/{buildingUnitId}` — Consulta itens de uma medição específica.

## Locais de Obra

[Especificação oficial](oficial/yaml-files/sites-v1.yaml)

- **GET** `/sites` — Busca uma lista de locais de uma obra

## Diário de Obra

[Especificação oficial](oficial/yaml-files/construction-daily-report-v1.yaml)

- **GET** `/construction-daily-report` — Retorna os Diários das Obras paginados.
- **POST** `/construction-daily-report` — Cadastra novo diário de obra
- **GET** `/construction-daily-report/{buildingId}/{constructionDailyId}` — Consulta diário específico
- **DELETE** `/construction-daily-report/{buildingId}/{constructionDailyId}` — Remove diário de obra
- **POST** `/construction-daily-report/{buildingId}/{constructionDailyId}/attachments` — Adiciona anexo ao diário
- **GET** `/construction-daily-report/{buildingId}/{constructionDailyId}/attachments/{attachmentId}` — Baixa anexo do diário
- **PUT** `/construction-daily-report/{buildingId}/{constructionDailyId}/events` — Atualiza ocorrências
- **POST** `/construction-daily-report/{buildingId}/{constructionDailyId}/events` — Adiciona ocorrências
- **PUT** `/construction-daily-report/{buildingId}/{constructionDailyId}/tasks` — Atualiza tarefas
- **POST** `/construction-daily-report/{buildingId}/{constructionDailyId}/tasks` — Adiciona tarefas
- **PUT** `/construction-daily-report/{buildingId}/{constructionDailyId}/crews` — Atualiza equipes
- **POST** `/construction-daily-report/{buildingId}/{constructionDailyId}/crews` — Adiciona equipes
- **PUT** `/construction-daily-report/{buildingId}/{constructionDailyId}/equipments` — Atualiza equipamentos
- **POST** `/construction-daily-report/{buildingId}/{constructionDailyId}/equipments` — Adiciona equipamentos
- **GET** `/construction-daily-report/event-type` — Lista tipos de ocorrência
- **GET** `/construction-daily-report/types` — Lista tipos de diário
- **Webhook** `CONSTRUCTION_DAILY_REPORT_TYPE_CREATED` — Tipo de diário de obra criado
- **Webhook** `CONSTRUCTION_DAILY_REPORT_TYPE_UPDATED` — Tipo de diário de obra atualizado
- **Webhook** `CONSTRUCTION_DAILY_REPORT_TYPE_DELETED` — Tipo de diário de obra excluído

## Orçamentos de Obra

[Especificação oficial](oficial/yaml-files/building-cost-estimations-v1.yaml)

- **GET** `/building-cost-estimations/{buildingId}/sheets` — Lista planilhas do orçamento
- **GET** `/building-cost-estimations/{buildingId}/sheets/{building_unit_id}/items` — Lista itens da planilha
- **Webhook** `BUILDING_COST_ESTIMATIONS_VERSION_CREATED` — Webhook de nova versão de orçamento criada
- **Webhook** `BUILDING_COST_ESTIMATION_UPDATED` — Webhook de item de orçamento criado ou removido

## Insumos Orçados

[Especificação oficial](oficial/yaml-files/building-cost-estimation-cost-estimate-resources-v1.yaml)

- **GET** `/building-cost-estimations/{buildingId}/cost-estimate-resources` — Retorno um array com todos os insumos orçados

## Insumos do Orçamento da Obra

[Especificação oficial](oficial/yaml-files/building-cost-estimation-resources-v1.yaml)

- **GET** `/building-cost-estimations/{buildingId}/resources` — Lista insumos do orçamento
- **POST** `/building-cost-estimations/{buildingId}/resources` — Inclui um insumo no orçamento de uma obra.
- **GET** `/building-cost-estimations/{buildingId}/resources/{id}` — Consulta insumo específico
- **PATCH** `/building-cost-estimations/{buildingId}/resources/{id}` — Atualiza código auxiliar de insumo no orçamento de obra

## Tabelas do Custos Unitários

[Especificação oficial](oficial/yaml-files/cost-databases-v1.yaml)

- **GET** `/cost-databases` — Retorna um array com todas as tabelas ativas
- **GET** `/cost-databases/{costDatabaseId}/resources` — Retorna um array com todos os insumos ativos de uma tabela
- **GET** `/cost-databases/{costDatabaseId}/resources/{resourceId}` — Retorna o insumo correspondente ao id informado.
- **GET** `/cost-databases/{costDatabaseId}/work-items` — Retorna um array com todos os serviços ativos.
- **GET** `/cost-databases/{costDatabaseId}/work-items-assemblies` — Retorna um array com todas as composições dos serviços.
- **Webhook** `RESOURCE_CREATED` — Webhook de insumo criado
- **Webhook** `WORKITEM_CREATED` — Webhook de serviço criado

## Unidades de movimento

[Especificação oficial](oficial/yaml-files/resource-units-of-movement-v1.yaml)

- **GET** `/building-cost-estimations/{buildingId}/resource-units-of-movement` — Lista unidades de movimento ativas dos insumos da obra

## Calendários de Obra

[Especificação oficial](oficial/yaml-files/building-calendar-v1.yaml)

- **GET** `/building-projects/{buildingId}/calendar` — Retorna config do calendário de planejamento da obra
- **PUT** `/building-projects/{buildingId}/calendar` — Insere calendário em nova versão do planejamento da obra
- **GET** `/building-projects/{buildingId}/calendar/days-off` — Retorna datas dos dias de folga no período da obra
- **POST** `/building-projects/{buildingId}/calendar/days-off` — Insere folgas no calendário da obra
- **DELETE** `/building-projects/{buildingId}/calendar/days-off` — Remove folgas do calendário da obra

## Grupos de Serviços

[Especificação oficial](oficial/yaml-files/grupos-de-servicos.yaml)

- **GET** `/work-item-groups` — Realiza a busca de Grupos de Serviços.

## Contratos de Suprimentos

[Especificação oficial](oficial/yaml-files/contracts-v1.yaml)

- **GET** `/supply-contracts` — Consultar contrato
- **GET** `/supply-contracts/all` — Consulta lista de contratos
- **GET** `/supply-contracts/attachments` — Retorna o anexo do contrato
- **POST** `/supply-contracts/attachments` — Inclui anexo do contrato
- **GET** `/supply-contracts/attachments/all` — Lista de anexos do contrato
- **PATCH** `/supply-contracts/authorize` — Autoriza um Contrato que está aguardando autorização.
- **GET** `/supply-contracts/buildings` — Consultar obras do contrato com unidades construtivas
- **GET** `/supply-contracts/addenda` — Consultar aditivos de obras do contrato
- **GET** `/supply-contracts/addenda/items` — Consultar itens de aditivo da obra do contrato
- **PATCH** `/supply-contracts/disapprove` — Reprova um Contrato que está aguardando autorização.
- **GET** `/supply-contracts/items` — Retorna um array com os itens do contrato
- **GET** `/supply-contracts/items/purchase-requests` — Itens de Solicitação atendidas.
- **Webhook** `CONTRACT_AUTHORIZED` — Webhook de contrato autorizado
- **Webhook** `CONTRACT_UNAUTHORIZED` — Webhook de contrato desautorizado

## Medições de Contratos de Suprimentos

[Especificação oficial](oficial/yaml-files/measurement-v1.yaml)

- **GET** `/supply-contracts/measurements` — Consulta medições
- **POST** `/supply-contracts/measurements` — Cria uma nova medição para o respectivo contrato e obra.
- **GET** `/supply-contracts/measurements/all` — Consulta medições de contratos
- **GET** `/supply-contracts/measurements/attachments` — Download anexos de medição de contrato
- **POST** `/supply-contracts/measurements/attachments` — Inclui anexos de medição de contrato
- **GET** `/supply-contracts/measurements/attachments/all` — Consulta anexos de medição de contrato
- **PATCH** `/supply-contracts/measurements/authorize` — Autoriza uma Medição que está aguardando autorização
- **GET** `/supply-contracts/measurements/clearing` — Retorna a liberação de uma medição.
- **PATCH** `/supply-contracts/measurements/disapprove` — Reprova uma Medição que está aguardando autorização.
- **GET** `/supply-contracts/measurements/items` — Retorna um array com os itens medidos nesta medição.
- **Webhook** `MEASUREMENT_AUTHORIZED` — Webhook de medição autorizada
- **Webhook** `MEASUREMENT_UNAUTHORIZED` — Webhook de medição desautorizada
- **Webhook** `CLEARING_FINISHED` — Webhook de liberação de medição finalizada
- **Webhook** `CLEARING_DELETED` — Webhook de liberação de medição deletada

## Pedidos de Compra

[Especificação oficial](oficial/yaml-files/purchase-orders-v1.yaml)

- **GET** `/purchase-orders` — Consulta pedidos de compra
- **GET** `/purchase-orders/{purchaseOrderId}` — Consulta pedido de compra
- **GET** `/purchase-orders/{purchaseOrderId}/items` — Consulta de itens do pedido de compra
- **GET** `/purchase-orders/{purchaseOrderId}/items/{itemNumber}` — Consulta item do pedido de compra
- **GET** `/purchase-orders/{purchaseOrderId}/items/{itemNumber}/purchase-requests` — Itens de Solicitação atendidas.
- **GET** `/purchase-orders/{purchaseOrderId}/items/{itemNumber}/delivery-schedules` — Retorna previsões de entregas do item do pedido de compra
- **GET** `/purchase-orders/{purchaseOrderId}/items/{itemNumber}/buildings-appropriations` — Consulta de apropriações de obra do item do pedido
- **GET** `/purchase-orders/{purchaseOrderId}/totalization` — Consultar a totalização do pedido de compra
- **GET** `/purchase-orders/{purchaseOrderId}/direct-billing` — Consultar o faturamento direto simples do pedido de compra.
- **PUT** `/purchase-orders/{purchaseOrderId}/authorize` — Autoriza pedido de compra que está aguardando autorização
- **PATCH** `/purchase-orders/{purchaseOrderId}/authorize` — Autoriza pedido de compra
- **PUT** `/purchase-orders/{purchaseOrderId}/disapprove` — Reprova pedido de compra que está aguardando autorização
- **PATCH** `/purchase-orders/{purchaseOrderId}/disapprove` — Reprova pedido de compra
- **POST** `/purchase-orders/{purchaseOrderId}/attachments` — Inserção dos anexos no pedido de compra
- **GET** `/purchase-orders/{purchaseOrderId}/attachments` — Retorna lista de anexos do pedido de compra
- **GET** `/purchase-orders/{purchaseOrderId}/attachments/{attachmentNumber}` — Download Anexo
- **GET** `/purchase-orders/{purchaseOrderId}/supplier-evaluation-criteria` — Lista de critérios de avaliação
- **POST** `/purchase-orders/{purchaseOrderId}/evaluation` — Cadastra uma avaliação do fornecedor no pedido de compra
- **PUT** `/purchase-orders/{purchaseOrderId}/evaluation` — Cadastra uma avaliação do fornecedor
- **GET** `/purchase-orders/{purchaseOrderId}/analysis/pdf` — Gera o relatório de Análise do Pedido de Compra
- **Webhook** `PURCHASE_ORDER_AUTHORIZATION_CHANGED` — Autorização do pedido alterada
- **Webhook** `PURCHASE_ORDER_GENERATED_FROM_NEGOCIATION` — Pedido gerado via negociação
- **Webhook** `PURCHASE_ORDER_ITEM_MODIFIED` — Itens do pedido modificados
- **Webhook** `PURCHASE_ORDER_FINANCIAL_FORECAST_UPDATED` — Previsão financeira atualizada

## Solicitações de Compra

[Especificação oficial](oficial/yaml-files/solicitacoes-de-compra.yaml)

- **GET** `/purchase-requests/{purchaseRequestId}` — Consulta solicitação de compra
- **PATCH** `/purchase-requests/{purchaseRequestId}/authorize` — Autoriza todos os itens de uma solicitação
- **PATCH** `/purchase-requests/{purchaseRequestId}/disapproval` — Reprova todos os itens de uma solicitação
- **POST** `/purchase-requests` — Cria uma solicitação de compra para uma obra já existente
- **GET** `/purchase-requests/all/items` — Consulta itens de solicitação de compra
- **GET** `/purchase-requests/{purchaseRequestId}/items/{purchaseRequestItemNumber}/buildings-appropriations` — Consulta apropriações de um item
- **GET** `/purchase-requests/{purchaseRequestId}/items/{purchaseRequestItemNumber}/delivery-requirements` — Consulta entregas de um item
- **POST** `/purchase-requests/{purchaseRequestId}/items` — Cria itens para uma solicitação de compra existente
- **PATCH** `/purchase-requests/{purchaseRequestId}/items/authorize` — Itens de Solicitação de compra para autorização
- **PATCH** `/purchase-requests/{purchaseRequestId}/items/{purchaseRequestItemNumber}/authorize` — Autoriza um item de uma solicitação
- **PATCH** `/purchase-requests/{purchaseRequestId}/items/{purchaseRequestItemNumber}/disapproval` — Reprova um item de uma solicitação
- **POST** `/purchase-requests/{purchaseRequestId}/attachments` — Inserção de anexo na solicitação de compra
- **GET** `/purchase-requests/{purchaseRequestId}/attachments` — Consulta de anexos da solicitação de compra
- **GET** `/purchase-requests/{purchaseRequestId}/attachments/{attachmentNumber}` — Download do anexo da solicitação de compra
- **Webhook** `PURCHASE_REQUEST_ITEM_AUTHORIZATION_UPDATE` — Atualização de autorização do item da solicitação
- **Webhook** `PURCHASE_REQUEST_ITEM_CREATED` — Item da solicitação criado
- **Webhook** `PURCHASE_REQUEST_ITEM_UPDATED` — Item da solicitação atualizado
- **Webhook** `PURCHASE_REQUEST_ITEM_DELETED` — Item da solicitação removido
- **Webhook** `PURCHASE_REQUEST_DELETED` — Solicitação de compra removida
- **Webhook** `PURCHASE_REQUEST_UPDATED` — Solicitação de compra atualizada

## Cotações de Preços

[Especificação oficial](oficial/yaml-files/purchase-quotations-v1.yaml)

- **POST** `/purchase-quotations` — Cria cotação de preço
- **GET** `/purchase-quotations/all/negotiations` — Lista cotações com negociações
- **POST** `/purchase-quotations/{purchaseQuotationId}/items` — Adiciona itens à cotação
- **POST** `/purchase-quotations/{purchaseQuotationId}/items/from-purchase-request` — Adiciona itens de solicitação
- **POST** `/purchase-quotations/{purchaseQuotationId}/items/{purchaseQuotationItemNumber}/suppliers` — Adiciona fornecedores ao item
- **POST** `/purchase-quotations/{purchaseQuotationId}/suppliers/{supplierId}/negotiations` — Cria negociação com fornecedor
- **PATCH** `/purchase-quotations/{purchaseQuotationId}/suppliers/{supplierId}/negotiations/latest/authorize` — Autoriza negociação
- **PUT** `/purchase-quotations/{purchaseQuotationId}/suppliers/{supplierId}/negotiations/{negotiationNumber}` — Atualiza negociação
- **PUT** `/purchase-quotations/{purchaseQuotationId}/suppliers/{supplierId}/negotiations/{negotiationNumber}/items/{quotationItemNumber}` — Atualiza item da negociação
- **GET** `/purchase-quotations/comparison-map/pdf` — Gera PDF comparativo
- **Webhook** `PURCHASE_QUOTATION_NEGOTIATION_AUTHORIZATION_CHANGED` — Autorização da negociação alterada

## Nota Fiscal de Compra

[Especificação oficial](oficial/yaml-files/purchase-invoices-v1.yaml)

- **GET** `/purchase-invoices/{sequentialNumber}` — Consulta nota fiscal de compra
- **GET** `/purchase-invoices/{sequentialNumber}/items` — Retorna os itens da nota fiscal de compra
- **GET** `/purchase-invoices/{sequentialNumber}/items/{itemNumber}/buildings-appropriations` — Consulta apropriações de obra do item da nota fiscal
- **GET** `/purchase-invoices` — Lista notas fiscais de compra
- **POST** `/purchase-invoices` — Cadastra uma nota fiscal de compra.
- **POST** `/purchase-invoices/{sequentialNumber}/items/purchase-orders/delivery-schedules` — Insere itens em uma nota fiscal já existente
- **GET** `/purchase-invoices/deliveries-attended` — Lista das entregas atendidas

## Estoque de Insumos

[Especificação oficial](oficial/yaml-files/stock-inventories-v1.yaml)

- **GET** `/stock-inventories/{costCenterId}/items` — Retorna os insumos no estoque do centro de custo informado.
- **GET** `/stock-inventories/{costCenterId}/items/{resourceId}/building-appropriation` — Busca apropriações de obra do insumo em estoque
- **GET** `/stock-reservations` — Busca as reservas consistentes de forma paginada
- **GET** `/stock-reservations/{reservationId}/items` — Busca os itens da reserva de estoque informada
- **POST** `/stock-movements` — Cria um movimento de estoque para um ou mais insumos
- **POST** `/stock-movements/transfer` — Realiza um movimento transferência.
- **POST** `/stock-reservations/{reservationId}/movements` — Cria movimento para reserva
- **GET** `/inventory-movements/{id}` — Consulta movimentação específica
- **GET** `/inventory-movements` — Lista movimentações de estoque
- **Webhook** `INVENTORY_MOVEMENT_CREATED` — Notificação de movimentação de estoque criada
- **Webhook** `INVENTORY_MOVEMENT_UPDATED` — Notificação de movimentação de estoque atualizada
- **Webhook** `INVENTORY_MOVEMENT_DELETED` — Notificação de movimentação de estoque deletada

## Categorias de Suprimentos

[Especificação oficial](oficial/yaml-files/categorias-de-suprimentos.yaml)

- **GET** `/supply-categories` — Busca categorias no Sienge
- **GET** `/supply-categories/{categoryId}` — Busca categoria por código

## Contas-Correntes

[Especificação oficial](oficial/yaml-files/checking-accounts-v1.yaml)

- **GET** `/checking-accounts` — Busca de contas-correntes

## Centro de Custos

[Especificação oficial](oficial/yaml-files/centro-de-custos.yaml)

- **GET** `/cost-centers/{costCenterId}` — Busca todos os centros de custo no Sienge.
- **GET** `/cost-centers/{costCenterId}/available` — Busca centro de custo com contas correntes disponíveis.
- **GET** `/cost-centers` — Busca todos centros de custos ordenados pelo codigo id.
- **GET** `/cost-centers/immediate-register-settings` — Busca configurações de registro ATO no centro de custo.

## Credores

[Especificação oficial](oficial/yaml-files/creditor-v1.yaml)

- **GET** `/creditors` — Busca o credores
- **POST** `/creditors` — Inserção de credor
- **GET** `/creditors/{creditorId}` — Busca o credor
- **PATCH** `/creditors/{creditorId}` — Atualiza informações referentes ao credor
- **GET** `/creditors/{creditorId}/bank-informations` — Busca as informações bancárias do credor
- **POST** `/creditors/{creditorId}/bank-informations` — Inserção das informações bancárias do credor
- **PATCH** `/creditors/{creditorId}/bank-informations/{banckInformationId}` — Atualizar as informações bancárias do credor
- **GET** `/creditors/{creditorId}/pix-informations` — Busca as informações de pix do credor
- **POST** `/creditors/{creditorId}/pix-informations` — Insere as informações de pix do credor
- **PATCH** `/creditors/{creditorId}/pix-informations/{pixInformationId}` — Altera as informações de pix do credor
- **PATCH** `/creditors/{creditorId}/phone/{phoneId}` — Atualizar as informações de um telefone do credor
- **PATCH** `/creditors/{creditorId}/contact/{contactId}` — Atualizar as informações de um contato do credor
- **PATCH** `/creditors/{creditorId}/procurator/{procuratorId}` — Atualizar as informações de um procurador do credor
- **PUT** `/creditors/{creditorId}/agents` — Atualizar a lista de representantes do credor no Sienge
- **PUT** `/creditors/{creditorId}/payslip-desoneration-years` — Atualizar informações da desoneração da folha de pgto
- **PUT** `/creditors/{creditorId}/activate` — Ativar um credor desativado
- **PUT** `/creditors/{creditorId}/deactivate` — Desativar um credor ativado
- **Webhook** `CREDITORS_CREATED` — Webhook disparado quando um credor é criado
- **Webhook** `CREDITORS_UPDATED` — Webhook disparado quando um credor é atualizado
- **Webhook** `CREDITORS_REMOVED` — Webhook disparado quando um credor é removido
- **Webhook** `CREDITORS_DISABLED` — Webhook disparado quando um credor é desativado
- **Webhook** `CREDITORS_ENABLED` — Webhook disparado quando um credor é ativado

## Departamentos

[Especificação oficial](oficial/yaml-files/departments-v1.yaml)

- **GET** `/departments/{departmentId}` — Busca o departamento no Sienge
- **GET** `/departments` — Busca uma lista de departamentos

## Documentos

[Especificação oficial](oficial/yaml-files/document-identification-v1.yaml)

- **GET** `/document-identifications` — Busca documentos paginados
- **GET** `/document-identifications/{documentIdentificationId}` — Busca o documento no Sienge

## Planos Financeiros

[Especificação oficial](oficial/yaml-files/payment-categories-v1.yaml)

- **GET** `/payment-categories/{paymentCategoriesId}` — Busca o plano financeiro no Sienge pelo Código
- **GET** `/payment-categories` — Busca todos os planos financeiros no Sienge

## Relatório de Extrato de Credores

[Especificação oficial](oficial/yaml-files/creditor-report-v1.yaml)

- **GET** `/creditor-report/pdf` — Gera relatório de extrato de credores em PDF

## Títulos do Contas a Receber

[Especificação oficial](oficial/yaml-files/accounts-receivable-v1.yaml)

- **GET** `/accounts-receivable/receivable-bills` — Busca os títulos do cliente no Sienge
- **GET** `/accounts-receivable/receivable-bills/{receivableBillId}` — Busca os títulos no Sienge pelo número
- **GET** `/accounts-receivable/receivable-bills/{receivableBillId}/installments` — Busca as parcelas do título
- **PATCH** `/accounts-receivable/receivable-bills/{receivableBillId}/installments/{installmentId}/change-due-date` — Altera venc. da parcela e status da cobrança para Em Aberto
- **GET** `/accounts-receivable/{receivableBillId}/budget-categories` — Busca as apropriações financeiras do título
- **Webhook** `RECEIVABLE_INSTALLMENT_CREATED` — Webhook de parcela criada no contas a receber
- **Webhook** `RECEIVABLE_INSTALLMENT_UPDATED` — Webhook de parcela atualizada no contas a receber
- **Webhook** `RECEIVABLE_INSTALLMENT_REMOVED` — Webhook de parcela removida no contas a receber
- **Webhook** `ASSIGNMENT_RIGHTS_AGREEMENT_UPDATED` — Webhook de cessão de direito atualizada
- **Webhook** `UPDATE_RECEIVABLE_BILL_SITUATION` — Webhook de alteração de situação do título
- **Webhook** `RECEIPT_PROCESSED` — Webhook de baixa/recebimento processado
- **Webhook** `KEYS_HANDOVER_CREATED` — Webhook de entrega de chaves criada
- **Webhook** `KEYS_HANDOVER_EXCLUDED` — Webhook de entrega de chaves excluída

## Títulos do Contas a Pagar

[Especificação oficial](oficial/yaml-files/bill-debt-v1.yaml)

- **GET** `/bills` — Busca os títulos no Sienge
- **POST** `/bills` — Inserção do título no Sienge
- **GET** `/bills/by-change-date` — Busca títulos por data de alteração
- **GET** `/bills/{billId}` — Obtém detalhes de um título específico
- **PATCH** `/bills/{billId}` — Modifica dados de um título existente
- **POST** `/eletronic-invoice-bills` — Insere título baseado em nota fiscal eletrônica
- **GET** `/bills/{billId}/installments` — Lista parcelas de um título específico
- **PATCH** `/bills/{billId}/installments` — Atualiza parcelas do título em massa
- **PATCH** `/bills/{billId}/installments/{installmentId}` — Atualiza parcela do título
- **GET** `/bills/{billId}/installments/{installmentId}/payment-information/bank-transfer` — Busca pagamento por transferência bancária
- **PATCH** `/bills/{billId}/installments/{installmentId}/payment-information/bank-transfer` — Atualiza dados de transferência bancária
- **GET** `/bills/{billId}/installments/{installmentId}/payment-information/boleto-bancario` — Busca pagamento por boleto bancário
- **PATCH** `/bills/{billId}/installments/{installmentId}/payment-information/boleto-bancario` — Atualiza dados de boleto bancário
- **GET** `/bills/{billId}/installments/{installmentId}/payment-information/boleto-concessionaria` — Busca pagamento por boleto concessionária
- **PATCH** `/bills/{billId}/installments/{installmentId}/payment-information/boleto-concessionaria` — Insere pagamento por boleto concessionária
- **GET** `/bills/{billId}/installments/{installmentId}/payment-information/boleto-tax` — Busca pagamento de tributos com código de barras
- **PATCH** `/bills/{billId}/installments/{installmentId}/payment-information/boleto-tax` — Insere pagamento de tributos com código de barras
- **GET** `/bills/{billId}/installments/{installmentId}/payment-information/dda` — Busca pagamento DDA
- **PATCH** `/bills/{billId}/installments/{installmentId}/payment-information/dda` — Insere pagamento DDA
- **GET** `/bills/{billId}/installments/{installmentId}/payment-information/darf-tax` — Busca pagamento DARF
- **PATCH** `/bills/{billId}/installments/{installmentId}/payment-information/darf-tax` — Insere pagamento DARF
- **GET** `/bills/{billId}/installments/{installmentId}/payment-information/darj-tax` — Busca pagamento DARJ
- **PATCH** `/bills/{billId}/installments/{installmentId}/payment-information/darj-tax` — Insere pagamento DARJ
- **GET** `/bills/{billId}/installments/{installmentId}/payment-information/fgts-tax` — Busca pagamento FGTS
- **PATCH** `/bills/{billId}/installments/{installmentId}/payment-information/fgts-tax` — Insere pagamento FGTS
- **GET** `/bills/{billId}/installments/{installmentId}/payment-information/gare-tax` — Busca pagamento GARE
- **PATCH** `/bills/{billId}/installments/{installmentId}/payment-information/gare-tax` — Insere pagamento GARE
- **GET** `/bills/{billId}/installments/{installmentId}/payment-information/inss-tax` — Busca pagamento INSS
- **PATCH** `/bills/{billId}/installments/{installmentId}/payment-information/inss-tax` — Insere pagamento INSS
- **GET** `/bills/{billId}/installments/{installmentId}/payment-information/pix` — Busca pagamento Pix
- **PATCH** `/bills/{billId}/installments/{installmentId}/payment-information/pix` — Insere pagamento Pix
- **GET** `/bills/{billId}/taxes` — Busca impostos
- **GET** `/bills/{billId}/budget-categories` — Busca apropriações financeiras
- **PUT** `/bills/{billId}/budget-categories` — Atualiza apropriações financeiras
- **GET** `/bills/{billId}/departments-cost` — Busca apropriações de departamento
- **PUT** `/bills/{billId}/departments-cost` — Atualiza apropriações de departamento
- **GET** `/bills/{billId}/buildings-cost` — Busca apropriações de obra
- **PUT** `/bills/{billId}/buildings-cost` — Atualiza apropriações de obra
- **GET** `/bills/{billId}/attachments` — Busca anexos
- **POST** `/bills/{billId}/attachments` — Insere anexo
- **GET** `/bills/{billId}/attachments/{attachmentId}` — Download de anexo
- **GET** `/bills/{billId}/units` — Busca unidades
- **PUT** `/bills/{billId}/units` — Atualiza unidades
- **Webhook** `PAYMENT_BILL_UPDATED` — Webhook de título alterado no contas a pagar
- **Webhook** `PAYMENT_INSTALLMENT_CREATED` — Webhook de parcela criada no contas a pagar
- **Webhook** `PAYMENT_INSTALLMENT_UPDATED` — Webhook de parcela alterada no contas a pagar
- **Webhook** `PAYMENT_INSTALLMENT_REMOVED` — Webhook de parcela removida no contas a pagar
- **Webhook** `PAYMENT_AUTHORIZATION_AVAILABLE` — Webhook de autorização disponível no contas a pagar
- **Webhook** `PAYMENT_AUTHORIZATION_UPDATE` — Webhook de autorização atualizada no contas a pagar
- **Webhook** `PAYMENT_ACKNOWLEDGMENT_PENDING` — Webhook de título a pagar com a ciência pendente
- **Webhook** `PAYMENT_ACKNOWLEDGMENT_PROCESSED` — Webhook de título a pagar quando a ciência for realizada
- **Webhook** `PAYMENT_RECEIPT_PROCESSED` — Webhook de baixa processada no contas a pagar
- **Webhook** `PAYMENT_RECEIPT_UPDATED` — Webhook de baixa alterada no contas a pagar
- **Webhook** `PAYMENT_RECEIPT_REMOVED` — Webhook de baixa cancelada no contas a pagar
- **Webhook** `PAYMENT_RECEIPT_CHARGEBACK_PROCESSED` — Webhook de estorno da baixa processado no contas a pagar
- **Webhook** `PAYMENT_RECEIPT_CHARGEBACK_REMOVED` — Webhook de estorno da baixa cancelado no contas a pagar

## Portadores Para o Contas a Receber

[Especificação oficial](oficial/yaml-files/bearers-receivable-v1.yaml)

- **GET** `/bearers-receivable` — Busca os portadores cadastrados.

## Geração do Saldo Devedor Presente do Cliente

[Especificação oficial](oficial/yaml-files/current-debit-balance-v1.yaml)

- **GET** `/current-debit-balance` — Gera o saldo devedor presente do cliente informado.
- **GET** `/current-debit-balance/pdf` — Gera o link do PDF Saldo Devedor Presente (Expira em 5 min.)

## Extrato de Cliente Por E-Mail

[Especificação oficial](oficial/yaml-files/customer-financial-statements-v1.yaml)

- **GET** `/customer-financial-statements` — Exibe as informações do extrato do cliente
- **POST** `/customer-financial-statements` — Envia relatório de extrato de cliente por e-mail
- **GET** `/customer-financial-statements/pdf` — Gera link para download do PDF do Extrato do Cliente.

## Informe de Rendimentos - Imposto de Renda

[Especificação oficial](oficial/yaml-files/customer-income-tax-v1.yaml)

- **POST** `/customer-income-tax/report` — Envia relatório de imposto de renda por e-mail
- **GET** `/customer-income-tax/report/pdf` — Gera link para download do PDF referente ao IR do cliente.

## Saldo Devedor Presente

[Especificação oficial](oficial/yaml-files/email-current-debit-balance-v1.yaml)

- **POST** `/email-current-debit-balance` — Envia relatório de Saldo Devedor Presente por e-mail.

## Indexadores

[Especificação oficial](oficial/yaml-files/indexers-v1.yaml)

- **GET** `/indexers` — Busca uma lista de indexadores

## Reparcelamentos - Conta a Receber

[Especificação oficial](oficial/yaml-files/remade-installments-v1.yaml)

- **GET** `/remade-installments` — Busca os reparcelamentos das parcelas no Sienge
- **POST** `/remade-installments` — Realiza um reparcelamento.
- **DELETE** `/remade-installments` — Exclui um reparcelamento

## Saldo Devedor Presente do Cliente (Total)

[Especificação oficial](oficial/yaml-files/total-current-debit-balance-v1.yaml)

- **GET** `/total-current-debit-balance` — Gera totalização do saldo devedor presente do cliente.

## Geração de Cobrança de Parcelas Vencidas

[Especificação oficial](oficial/yaml-files/overdue-receivable-v1.yaml)

- **POST** `/overdue-receivable-bill` — Registra cobrança de parcelas vencidas

## Geração de Boleto (Segunda Via)

[Especificação oficial](oficial/yaml-files/payment-slip-notification-v1.yaml)

- **GET** `/payment-slip-notification` — Gera link para boleto de segunda via.
- **POST** `/payment-slip-notification` — Envia boleto de segunda via por e-mail para o cliente

## Antecipação de Parcelas

[Especificação oficial](oficial/yaml-files/prepayment-slip-register-v1.yaml)

- **POST** `/prepayment-slip-register/simulate` — Simula informações para antecipação de parcelas.
- **POST** `/prepayment-slip-register` — Registra cobrança referente a antecipação de parcelas.

## Histórico de Notificação de Cobranças

[Especificação oficial](oficial/yaml-files/collections-notification-history-v1.yaml)

- **GET** `/collections-notification-history/{collectionNotificationHistoryId}` — Busca o histórico da notificação de cobrança no Sienge
- **Webhook** `COLLECTION_NOTIFIED` — Notificação de cobrança gerada

## Notas Fiscais Eletrônicas de Produto

[Especificação oficial](oficial/yaml-files/nfe-api-v1.yaml)

- **GET** `/nfes` — Consulta notas fiscais emitidas por período
- **GET** `/nfes/{nfeKey}` — Consulta nota fiscal pela chave de acesso
- **GET** `/nfes/{nfeKey}/issuers-recipients` — Consulta emitente e destinatário da nota
- **GET** `/nfes/{nfeKey}/payments` — Consulta formas de pagamento da nota
- **GET** `/nfes/{nfeKey}/deliveries` — Consulta locais de entrega e retirada da nota
- **GET** `/nfes/{nfeKey}/linked-nfes` — Consulta notas fiscais referenciadas pela nota
- **GET** `/nfes/{nfeKey}/icms` — Consulta total do ICMS da nota fiscal
- **GET** `/nfes/{nfeKey}/carriers` — Consulta dados de transporte da nota fiscal
- **GET** `/nfes/{nfeKey}/issqn` — Consulta total de ISSQN da nota fiscal
- **GET** `/nfes/{nfeKey}/itens` — Consulta itens/produtos da nota fiscal eletrônica
- **GET** `/nfes/{nfeKey}/itens/{itemId}/ipi` — Retorna os dados de IPI de um item da nota fiscal
- **GET** `/nfes/{nfeKey}/itens/{itemId}/pis-cofins` — Consulta os dados de PIS/COFINS de um item da nota fiscal
- **GET** `/nfes/{nfeKey}/itens/{itemId}/simplified-icms` — Consulta os dados de ICMS de um item da nota fiscal
- **GET** `/nfes/{nfeKey}/itens/{itemId}/issqn` — Consulta os dados de ISS de um item da nota fiscal
- **GET** `/nfes/{nfeKey}/itens/{itemId}/icms` — Consulta o ICMS de determinado produto ou serviço

## Informações Fiscais de Serviço - Contas a Pagar

[Especificação oficial](oficial/yaml-files/tax-information-v1.yaml)

- **POST** `/bills/{billId}/tax-information` — Armazena informações fiscais do tipo Serviço no título
- **POST** `/bills/{billId}/tax-information/items` — Armazena dados fiscais de item de serviço do título

## Pré-Cadastro de Nota Fiscal de Serviço

[Especificação oficial](oficial/yaml-files/pre-cadastro-de-nota-fiscal-de-servico.yaml)

- **POST** `/service-invoice/pre-registration` — Cria um pré-cadastro de nota fiscal de serviço

## Contas Contábeis

[Especificação oficial](oficial/yaml-files/accountancy-accounts-v1.yaml)

- **GET** `/accountancy/accounts` — Lista contas contábeis
- **GET** `/accountancy/accounts/{id}` — Consulta conta específica
- **Webhook** `ACCOUNTANCY_ACCOUNT_UPDATED` — Webhook de conta contábil atualizada
- **Webhook** `ACCOUNTANCY_ACCOUNT_CREATED` — Webhook de conta contábil criada
- **Webhook** `ACCOUNTANCY_ACCOUNT_DELETED` — Webhook de conta contábil deletada

## Lotes Contábeis (Contabilidade)

[Especificação oficial](oficial/yaml-files/accountancy-batch-v1.yaml)

- **POST** `/batch` — Salva lotes contábeis
- **GET** `/batch` — Busca lotes contábeis

## Fechamento Contábil (Contabilidade)

[Especificação oficial](oficial/yaml-files/accountancy-closingaccountancy-v1.yaml)

- **GET** `/closingaccountancy` — Consulta saldos consolidados por empresa e conta
- **Webhook** `ACCOUNTANCY_CLOSING_CREATED` — Webhook de fechamento contábil criado

## Lançamentos Contábeis (Contabilidade)

[Especificação oficial](oficial/yaml-files/accountancy-entries-v1.yaml)

- **POST** `/accountancy/entries` — Salva lançamentos contábeis
- **GET** `/accountancy/entries` — Busca lançamentos contábeis
- **POST** `/accountancy/entries/async` — Salva lançamentos contábeis assíncronos
- **GET** `/accountancy/entries/async/status` — Retorna o status do processamento dos lançamentos

## Lançamentos Contábeis (Integração Contábil)

[Especificação oficial](oficial/yaml-files/lancamentos-contabeis-integracao-contabil.yaml)

- **GET** `/accountancy/entry-generator/entry-batches` — Lista lotes contábeis existentes
- **GET** `/accountancy/entry-generator/entry-batches/{id}` — Busca lote por ID
- **GET** `/accountancy/entry-generator/entry-batches/{id}/entries` — Lista lançamentos de um lote
- **GET** `/accountancy/entry-generator/entries` — Lista todos os lançamentos
- **GET** `/accountancy/entry-generator/entry-batches/{id}/entries/{entryId}` — Busca lançamento por ID

## Saldo de Contas Correntes

[Especificação oficial](oficial/yaml-files/accounts-balances-v1.yaml)

- **GET** `/accounts-balances` — Retorna a lista de saldos das contas.

## Extrato de Contas

[Especificação oficial](oficial/yaml-files/accounts-statements-v1.yaml)

- **GET** `/accounts-statements` — Retorna a lista de movimentações associadas a contas.

## Balancete de Verificação

[Especificação oficial](oficial/yaml-files/trial-balance-v1.yaml)

- **GET** `/trial-balance` — Busca dados do balancete de verificação

## Tipos de Clientes

[Especificação oficial](oficial/yaml-files/customer-types-v1.yaml)

- **GET** `/customer-types` — Busca os tipos de clientes disponíveis no sistema.

## Comissões

[Especificação oficial](oficial/yaml-files/commissions-v1.yaml)

- **GET** `/commissions` — Busca as parcelas das comissões.
- **POST** `/commissions` — Persiste a comissão.
- **GET** `/commissions/{commissionId}` — Busca uma comissão pelo ID.
- **DELETE** `/commissions/{commissionId}` — Deleta uma comissão pelo ID.
- **PATCH** `/commissions/{commissionId}` — Altera uma comissão pelo ID.
- **PATCH** `/commissions/authorize` — Autoriza, ou desautoriza as parcelas de comissão.
- **PATCH** `/commissions/cancel` — Cancela ou desfaz cancelamento das parcelas de comissão.
- **POST** `/commissions/release` — Libera parcelas de comissão para pagamento.
- **DELETE** `/commissions/{commissionId}/brokers/{brokerId}` — Remove corretor de uma comissão por ID.
- **POST** `/commissions/{commissionId}/brokers` — Inclui corretores adicionais em uma comissão existente.
- **GET** `/commissions/countFilters` — Consulta totalizadores agrupados por status das parcelas.
- **GET** `/commissions/configurations/brokers` — Busca a lista de configurações de corretores.
- **POST** `/commissions/configurations/brokers` — Persiste a configuração de um corretor.
- **DELETE** `/commissions/configurations/brokers/{brokerId}` — Deleta a configuração do corretor por ID.
- **PATCH** `/commissions/configurations/brokers/{brokerId}` — Atualiza a configuração de um corretor.
- **POST** `/commissions/configurations/enterprises` — Persiste uma configuração para um empreendimento.
- **GET** `/commissions/configurations/enterprises/{enterpriseId}` — Consulta configurações de comissão de um empreendimento.
- **PUT** `/commissions/configurations/enterprises/{enterpriseId}` — Atualiza uma configuração do empreendimento.
- **Webhook** `SALES_COMMISSION_CREATED` — Comissão de vendas criada
- **Webhook** `SALES_COMMISSION_INSTALLMENTS_AUTHORIZED` — Parcela de comissão autorizada
- **Webhook** `SALES_COMMISSION_INSTALLMENTS_CANCELED` — Parcela de comissão cancelada
- **Webhook** `SALES_COMMISSION_INSTALLMENTS_RELEASED` — Parcela de comissão liberada
- **Webhook** `SALES_COMMISSION_RELEASES_EXCLUDED` — Liberação de comissão excluída
- **Webhook** `SALES_COMMISSION_EXCLUDED` — Comissão de vendas excluída

## Comissões (Antigo)

[Especificação oficial](oficial/yaml-files/commissions-forecasts-v1.yaml)

- **GET** `/sales-commissions` — Lista comissões de venda para contratos e corretores.
- **POST** `/sales-commissions-forecasts` — Cria previsão de comissão para contrato e corretor.

## Contratos de Vendas

[Especificação oficial](oficial/yaml-files/sales-contracts-v1.yaml)

- **GET** `/sales-contracts` — Busca contratos de vendas ordenados pelo código.
- **POST** `/sales-contracts` — Insere um contrato de vendas.
- **GET** `/sales-contracts/{salesContractId}` — Consulta um contrato de vendas.
- **DELETE** `/sales-contracts/{salesContractId}` — Remove um contrato de vendas.
- **PATCH** `/sales-contracts/{salesContractId}` — Atualiza informações do contrato.
- **GET** `/sales-contracts/{salesContractId}/attachments` — Busca os anexos do contrato de vendas.
- **POST** `/sales-contracts/{salesContractId}/attachments` — Inclui um anexo ao contrato de vendas.
- **GET** `/sales-contracts/{salesContractId}/attachments/{attachmentId}` — Download do anexo do contrato de vendas.
- **GET** `/sales-contracts/{salesContractId}/guarantors` — Busca avalistas do contrato de vendas.
- **POST** `/sales-contracts/{salesContractId}/guarantors` — Inclui avalistas ao contrato.
- **GET** `/sales-contracts/{salesContractId}/guarantors/{guarantorId}` — Retorna o avalista do contrato de vendas.
- **PATCH** `/sales-contracts/{salesContractId}/guarantors/{guarantorId}` — Atualiza informações de avalistas do contrato de vendas.
- **PUT** `/sales-contracts/{salesContractId}/guarantors/{guarantorId}/phones` — Sobrescreve a lista de telefones existentes do avalista.
- **POST** `/sales-contracts/{salesContractId}/cancellation` — Cancela o contrato de venda.
- **Webhook** `SALES_CONTRACT_CREATED` — Contrato de venda criado
- **Webhook** `SALES_CONTRACT_UPDATED` — Contrato de venda atualizado
- **Webhook** `SALES_CONTRACT_REMOVED` — Contrato de venda removido
- **Webhook** `SALES_CONTRACT_ISSUED` — Contrato de venda emitido
- **Webhook** `SALES_CONTRACT_CANCELED` — Contrato de venda cancelado

## Unidades de Imóveis

[Especificação oficial](oficial/yaml-files/unit-v1.yaml)

- **GET** `/units/{unitId}` — Busca a unidade no Sienge
- **PATCH** `/units/{unitId}` — Atualiza informações da Unidade
- **GET** `/units` — Retorna as unidades ordenadas decrescentemente pelo id
- **POST** `/units` — Persiste uma Unidade.
- **POST** `/units/{unitId}/child-unit` — Adiciona uma ou mais unidades filhas na unidade pelo ID.
- **GET** `/units/{unitId}/groupings` — Busca agrupamentos de unidade no Sienge
- **POST** `/units/{unitId}/attachments` — Inclui um anexo a unidade.
- **GET** `/units/characteristics` — Retorna todas características de unidade cadastradas
- **POST** `/units/characteristics` — Cria uma característica da unidade.
- **PUT** `/units/{unitId}/characteristics` — Vincula uma ou mais características a uma unidade
- **GET** `/units/situations` — Retorna todas situaçãos de unidade cadastradas
- **POST** `/units/situations` — Cria uma situação para uso em unidade.
- **POST** `/units/{unitId}/address` — Insere o endereço da unidade
- **PUT** `/units/{unitId}/address` — Atualiza o endereço da unidade
- **GET** `/units/{unitId}/evaluations` — Busca avaliações cadastradas para a unidade
- **POST** `/units/{unitId}/evaluations` — Cria uma nova avaliação para a unidade
- **Webhook** `UNIT_CREATED` — Nova unidade criada
- **Webhook** `UNIT_UPDATED` — Unidade atualizada
- **Webhook** `UNIT_REMOVED` — Unidade removida

## Reservas de Unidades

[Especificação oficial](oficial/yaml-files/unit-bookings-v1.yaml)

- **POST** `/unit-bookings` — Cria uma reserva de unidade.
- **PATCH** `/unit-bookings/units/{unitId}/deactivate` — Inativa uma reserva de unidade.

## Tabela de Preços

[Especificação oficial](oficial/yaml-files/price-tables-v1.yaml)

- **GET** `/price-tables` — Retorna a última versão das tabelas de preços.

## Profissões

[Especificação oficial](oficial/yaml-files/professions-v1.yaml)

- **GET** `/professions` — Busca uma ou mais profissões
- **POST** `/professions` — Persiste uma ou mais profissões.
- **GET** `/professions/{professionId}` — Busca uma profissão por id.

## Locação de Imóveis

[Especificação oficial](oficial/yaml-files/property-rental-v1.yaml)

- **GET** `/property-rental` — Retorna uma lista de contratos de locação de imóveis.
- **POST** `/property-rental` — Cria um novo contrato de locação de imóveis.
- **Webhook** `PROPERTY_RENTAL_CREATED` — Contrato de locação criado
- **Webhook** `PROPERTY_RENTAL_UPDATED` — Contrato de locação atualizado
- **Webhook** `PROPERTY_RENTAL_EXCLUDED` — Contrato de locação excluído
- **Webhook** `PROPERTY_RENTAL_CANCELLED` — Contrato de locação cancelado
- **Webhook** `PROPERTY_RENTAL_TERMINATED` — Contrato de locação finalizado
- **Webhook** `PROPERTY_RENTAL_ISSUED` — Contrato de locação emitido
- **Webhook** `PROPERTY_RENTAL_REACTIVATED` — Contrato de locação reativado
- **Webhook** `PROPERTY_RENTAL_TERMINATION_EXCLUDED` — Finalização de contrato excluída

## Tipo de Imóveis

[Especificação oficial](oficial/yaml-files/property-types-v1.yaml)

- **GET** `/property-types` — Busca tipos de imóveis
- **GET** `/property-types/{propertyTypeId}` — Busca o tipo de imóvel.

## Estados Civis

[Especificação oficial](oficial/yaml-files/civil-status-v1.yaml)

- **GET** `/civil-status` — Busca uma lista de estados civis
- **POST** `/civil-status` — Persiste estado civil.

## Tipos de Condição de Pagamento

[Especificação oficial](oficial/yaml-files/payment-condition-types-v1.yaml)

- **GET** `/payment-condition-types` — Retorna os Tipos de Condição de Pagamento disponíveis.

## Bens Imóveis

[Especificação oficial](oficial/yaml-files/fixed-assets-v1.yaml)

- **GET** `/patrimony/fixed` — Lista bens imóveis

## Bens Móveis

[Especificação oficial](oficial/yaml-files/movable-assets-v1.yaml)

- **GET** `/patrimony/movable` — Lista bens móveis

## Mapa Imobiliário Consolidado

[Especificação oficial](oficial/yaml-files/real-estate-map-v1.yaml)

- **GET** `/real-estate-map` — Consulta o Mapa Imobiliário por empreendimento e período

## Parâmetros

[Especificação oficial](oficial/yaml-files/parameters-v1.yaml)

- **GET** `/parameters/{id}` — Retorna o id e o valor de um determinado parâmetro.

## Marcas

[Especificação oficial](oficial/yaml-files/marcas.yaml)

- **GET** `/trademarks` — Realiza a busca de Marcas Existentes.

## Unidades de Medidas

[Especificação oficial](oficial/yaml-files/unidades-de-medidas.yaml)

- **GET** `/units-of-measure` — Realiza a busca de Unidades de Medidas Existentes.

## Clientes

[Especificação oficial](oficial/yaml-files/customers-v1.yaml)

- **GET** `/customers` — Busca clientes ordenando pelo código.
- **POST** `/customers` — Inclui um novo cliente.
- **GET** `/customers/{customerId}` — Busca um cliente pelo código.
- **PATCH** `/customers/{customerId}` — Atualiza informações do cliente.
- **PUT** `/customers/{customerId}/phones` — Atualiza os telefones do cliente.
- **PUT** `/customers/{customerId}/spouse` — Substitui dados do cônjuge, cria um novo caso não exista.
- **PUT** `/customers/{customerId}/familyIncomes` — Atualiza as rendas familiares do cliente.
- **PUT** `/customers/{customerId}/addresses/{addressType}` — Atualiza os endereços do cliente. Se não existir, cria.
- **GET** `/customers/{customerId}/attachments` — Busca as informações de anexos do cliente
- **POST** `/customers/{customerId}/attachments` — Inclui um novo anexo ao cliente.
- **GET** `/customers/{customerId}/attachments/{attachmentId}` — Download do anexo do cliente
- **POST** `/customers/{customerId}/procurator` — Inclui um novo procurador ao cliente.
- **Webhook** `CUSTOMER_CREATED` — Webhook disparado quando um cliente é criado
- **Webhook** `CUSTOMER_UPDATED` — Webhook disparado quando um cliente é atualizado
- **Webhook** `CUSTOMER_REMOVED` — Webhook disparado quando um cliente é removido
- **Webhook** `CUSTOMER_DISABLED` — Webhook disparado quando um cliente é desativado
- **Webhook** `CUSTOMER_ENABLED` — Webhook disparado quando um cliente é ativado

## Empresas

[Especificação oficial](oficial/yaml-files/company-v1.yaml)

- **GET** `/companies/{companyId}` — Busca a empresa no Sienge
- **GET** `/companies` — Busca uma lista de empresas ordenadas pelo código id

## Municípios

[Especificação oficial](oficial/yaml-files/cities-v1.yaml)

- **GET** `/cities` — Busca uma lista de municípios

## Bulk-data Business Budget

[Especificação oficial](oficial/yaml-files/bulk-data-business-budget.yaml)

- **GET** `/business-budget` — Retorna todas as versões de orçamentos empresariais.

## Bulk-data Caixas e Bancos

[Especificação oficial](oficial/yaml-files/bulk-data-caixas-e-bancos.yaml)

- **GET** `/bank-movement` — Retorna movimentos financeiros, caso possua
- **GET** `/bank-movement/by-movements` — Retorna movimentos financeiros, caso possua.
- **Webhook** `BANK_MOVEMENT_CREATED` — Webhook de movimento bancário criado
- **Webhook** `BANK_MOVEMENT_UPDATED` — Webhook de movimento bancário atualizado
- **Webhook** `BANK_MOVEMENT_DELETED` — Webhook de movimento bancário excluído

## Bulk-data Contratos de Vendas

[Especificação oficial](oficial/yaml-files/bulk-data-sales-v1.yaml)

- **GET** `/sales` — Consulta os dados dos contratos de vendas.

## Bulk-data Cotações de preços

[Especificação oficial](oficial/yaml-files/bulk-data-purchase-quotations-v1.yaml)

- **GET** `/purchase-quotations` — Retorna cotações com itens, fornecedores e negociações.

## Bulk-data Extrato Cliente Histórico

[Especificação oficial](oficial/yaml-files/bulk-data-customer-extract-history-v1.yaml)

- **GET** `/customer-extract-history` — Realiza leitura de dados do extrato de cliente.

## Bulk-data Insumos da Obra

[Especificação oficial](oficial/yaml-files/bulk-data-building-resource-v1.yaml)

- **GET** `/building/resources` — Retorna Insumos associados à Obra por detalhe e marca

## Bulk-data Itens de Orçamento

[Especificação oficial](oficial/yaml-files/bulk-data-building-cost-estimations-v1.yaml)

- **GET** `/building-cost-estimation-items` — Lista itens de orçamento de obras (todas as versões)

## Bulk-data Parcelas a Pagar

[Especificação oficial](oficial/yaml-files/bulk-data-parcelas-a-pagar.yaml)

- **GET** `/outcome` — Retorna parcelas sem baixa e seus pagamentos, caso possua.
- **GET** `/outcome/by-bills` — Retorna parcelas por códigos dos títulos

## Bulk-data Parcelas do Contas a Receber

[Especificação oficial](oficial/yaml-files/bulk-data-income-v1.yaml)

- **GET** `/income` — Retorna parcelas abertas ou pagas de títulos a receber.
- **GET** `/income/by-bills` — Retorna as parcelas dos títulos a receber informados.

## Bulk-data Relatório de Notas Fiscais

[Especificação oficial](oficial/yaml-files/bulk-data-invoice-items-v1.yaml)

- **GET** `/invoice-itens` — Consulta itens das notas fiscais

## Bulk-data Saldo Devedor Cliente

[Especificação oficial](oficial/yaml-files/bulk-data-customer-debt-balance.yaml)

- **GET** `/customer-debt-balance` — Realiza leitura de dados do saldo devedor cliente.

## Bulk-data Saldos Contábeis Consolidados Por Centro de Custo

[Especificação oficial](oficial/yaml-files/bulk-data-account-cost-center-balance-v1.yaml)

- **GET** `/accountancy/accountCostCenterBalance` — Consulta saldos contábeis por centro de custo

## Bulk-data Saldos Contábeis Consolidados Por Empresa

[Especificação oficial](oficial/yaml-files/bulk-data-account-company-balance-v1.yaml)

- **GET** `/accountancy/accountBalance` — Consulta saldos contábeis consolidados da empresa

## Bulk-data Títulos Inadimplentes

[Especificação oficial](oficial/yaml-files/bulk-data-defaulters-receivable-bills-v1.yaml)

- **GET** `/defaulters-receivable-bills` — Retorna os títulos inadimplentes com as parcelas em atraso.
- **GET** `/defaulters-receivable-bills/by-aging` — Retorna títulos inadimplentes com parcela com maior atraso.

## Gerenciamento de Webhooks

[Especificação oficial](oficial/yaml-files/hooks-v1.yaml)

- **GET** `/hooks` — Consulta paginada de WebHooks
- **POST** `/hooks` — Inserção de um WebHook
- **GET** `/hooks/{hookId}` — Consulta um WebHook específico por ID
- **DELETE** `/hooks/{hookId}` — Remoção de um WebHook específico por ID

## Gerenciamento de Cobrança

[Especificação oficial](oficial/yaml-files/gerenciamento-de-cobranca.yaml)

- **Webhook** `BOOK_COLLECTION_CONFIRMED` — Cobrança escritural confirmada

## Registro de Boletos

[Especificação oficial](oficial/yaml-files/registro-de-boletos.yaml)

- **Webhook** `PAYMENT_SLIP_REGISTERED` — Registro de boleto processado

## Assistência Técnica

[Especificação oficial](oficial/yaml-files/assistencia-tecnica.yaml)

- **Webhook** `TECHNICAL_ASSISTANCE_ANALYSIS` — Webhook de assistência técnica em análise
- **Webhook** `TECHNICAL_ASSISTANCE_CANCELED` — Webhook de assistência técnica cancelada
- **Webhook** `TECHNICAL_ASSISTANCE_CLOSED` — Webhook de assistência técnica encerrada
- **Webhook** `TECHNICAL_ASSISTANCE_CREATED` — Webhook de assistência técnica criada
- **Webhook** `TECHNICAL_ASSISTANCE_EXCLUDED` — Webhook de assistência técnica excluída
- **Webhook** `SERVICE_ORDER_CREATED` — Webhook de ordem de serviço criada
- **Webhook** `SERVICE_ORDER_REMOVED` — Webhook de ordem de serviço removida
- **Webhook** `SERVICE_ORDER_UPDATED` — Webhook de ordem de serviço atualizada
